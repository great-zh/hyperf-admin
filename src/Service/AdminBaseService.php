<?php

declare(strict_types=1);
/**
 * This file is part of Hyperf.
 *
 * @link     https://www.hyperf.io
 * @document https://hyperf.wiki
 * @contact  group@hyperf.io
 * @license  https://github.com/hyperf/hyperf/blob/master/LICENSE
 */

namespace HPlus\Admin\Service;

use HPlus\Admin\Exception\ApiAmisException;
use Hyperf\Collection\Arr;
use Hyperf\Database\Model\Collection;
use Hyperf\Database\Model\Model;
use Hyperf\Database\Query\Builder;
use Hyperf\Database\Schema\Schema;
use Hyperf\DbConnection\Db;
use Hyperf\Di\Annotation\Inject;
use Hyperf\HttpServer\Contract\RequestInterface;
use Hyperf\HttpServer\Contract\ResponseInterface;

use function Hyperf\Collection\collect;
use function Hyperf\Collection\data_get;

abstract class AdminBaseService
{
    #[Inject]
    protected RequestInterface $request;

    #[Inject]
    protected ResponseInterface $response;

    protected ?array $tableColumn = [];

    protected ?string $modelName;

    public static function make(): static
    {
        return new static();
    }

    /**
     * @return Model
     */
    public function getModel()
    {
        return new ($this->modelName ?? \Hyperf\DbConnection\Model\Model::class);
    }

    public function setModelName($modelName)
    {
        $this->modelName = $modelName;
    }

    public function getTableColumns()
    {
        if (!$this->tableColumn) {
            $this->tableColumn = (new \Hyperf\Database\Schema\Schema)->connection($this->getModel()->getConnectionName())->getSchemaBuilder()->getColumnListing($this->getModel()->getTable());
//            $this->tableColumn = Schema::getColumnListing($this->getModel()->getTable());
        }
        return $this->tableColumn;
    }

    /**
     * @return Model
     */
    public function query()
    {
        return $this->modelName::query();
    }

    public function primaryKey()
    {
        return $this->getModel()->getKeyName();
    }

    public function update($primaryKey, array $data)
    {
        $this->saving($data, $primaryKey);
        $columns = $this->getTableColumns();
        $model = $this->query()->where($this->primaryKey(), $primaryKey)->first();
        if (empty($model)) {
            throw new ApiAmisException('数据不存在！');
        }
        foreach ($data as $k => $v) {
            if (!in_array($k, $columns)) {
                continue;
            }
            $model->setAttribute($k, $v);
        }
        $result = $model->save();
        if ($result) {
            $this->saved($model, true);
        }
        return $result;
    }

    /**
     * 详情 获取数据.
     * @param mixed $id
     */
    public function getDetail($id): null|Builder|Collection|Model
    {
        $query = $this->query();

        $this->addRelations($query, 'detail');

        return $query->find($id);
    }

    /**
     * 编辑 获取数据.
     * @param mixed $id
     */
    public function getEditData($id): null|array|Builder|Collection|Model
    {
        $model = $this->getModel();

        $hidden = collect([$model->getCreatedAtColumn(), $model->getUpdatedAtColumn()])
            ->filter(fn($item) => $item !== null)
            ->toArray();

        $query = $this->query();

        $this->addRelations($query, 'edit');

        return $query->find($id)->makeHidden($hidden);
    }

    /**
     * 列表 获取查询.
     *
     * @return Builder
     */
    public function listQuery()
    {
        $query = $this->query();

        // 处理排序
        $this->sortable($query);

        // 自动加载 TableColumn 内的关联关系
        $this->loadRelations($query);

        // 处理查询
        $this->searchable($query);

        // 追加关联关系
        $this->addRelations($query);

        return $query;
    }

    /**
     * 添加关联关系.
     *
     * 预留钩子, 方便处理只需要添加 [关联] 的情况
     *
     * @param string $scene 场景: list, detail, edit
     * @param mixed $query
     */
    public function addRelations($query, string $scene = 'list')
    {
    }

    /**
     * 根据 tableColumn 定义的列, 自动加载关联关系.
     * @param mixed $query
     */
    public function loadRelations($query)
    {
        // 根据当前控制器取出他的page定义的 column字段，如果字段包含 .证明是从关联关系里取，查询模型是否有这个关联关系，有了自动加with
        //        $pageDefinition = Route::getCurrentRoute()->getController()?->list();
        //        if (!$pageDefinition instanceof Page) {
        //            return;
        //        }
        //        $columns       = $pageDefinition->toArray()['body']->amisSchema['columns'] ?? [];
        //        $withRelations = [];
        //        foreach ($columns as $column) {
        //            // 直接跳过不是 TableColumn 实例跳出
        //            if (!$column instanceof TableColumn) continue;
        //            $field = $column->amisSchema['name'];
        //            // 如果字段名包含点，尝试解析关联关系
        //            $splitFieldName = explode('.', $field);
        //            if (count($splitFieldName) > 1) {
        //                $relationName = $splitFieldName[0];
        //                // 检查模型上是否存在该方法，如果存在则加入到关联数组中
        //                if (method_exists($this->modelName, $relationName)) {
        //                    // 避免重复添加相同的关联关系
        //                    $withRelations[$relationName] = $relationName;
        //                }
        //            }
        //        }
        //        $query->with(array_values($withRelations));
    }

    /**
     * 排序.
     * @param mixed $query
     */
    public function sortable($query)
    {
        $orderBy = $this->request->query('orderBy');
        $orderDir = $this->request->query('orderDir', null);
        if ($orderBy && $orderDir) {
            $query->orderBy($orderBy, $orderDir ?? 'asc');
        } else {
            $query->orderByDesc($this->sortColumn());
        }
    }

    /**
     * 搜索.
     * @param mixed $query
     */
    public function searchable($query)
    {
        $params = $this->request->query();
        collect(array_keys($params))
            ->intersect($this->getTableColumns())
            ->map(function ($field) use ($query, $params) {
                $value = $params[$field] ?? null;
                $query->when($value, function ($query) use ($field, $value) {
                    $query->where($field, 'like', '%' . $value . '%');
                });
            });
    }

    /**
     * 列表 排序字段.
     *
     * @return string
     */
    public function sortColumn()
    {
        if (in_array('sort', $this->getTableColumns())) {
            return 'sort';
        }

        if (in_array($this->getModel()->getKeyName(), $this->getTableColumns())) {
            return $this->getModel()->getKeyName();
        }
        return Arr::first($this->getTableColumns());
    }

    /**
     * 列表 获取数据.
     *
     * @return array
     */
    public function list()
    {
        $query = $this->listQuery();

        $list = $query->paginate((int)$this->request->input('perPage', 20));
        $items = $list->items();
        $total = $list->total();

        return compact('items', 'total');
    }

    /**
     * 新增.
     *
     * @param mixed $data
     * @return bool
     */
    public function store($data)
    {
        $this->saving($data);

        $columns = $this->getTableColumns();
        $model = $this->getModel();

        foreach ($data as $k => $v) {
            if (!in_array($k, $columns)) {
                continue;
            }

            $model->setAttribute($k, $v);
        }

        $result = $model->save();

        if ($result) {
            $this->saved($model);
        }

        return $result;
    }

    /**
     * 删除.
     *
     * @return mixed
     */
    public function delete(string $ids)
    {
        $result = $this->query()->whereIn($this->primaryKey(), explode(',', $ids))->delete();

        if ($result) {
            $this->deleted($ids);
        }

        return $result;
    }

    /**
     * 快速编辑.
     *
     * @param mixed $data
     * @return true
     */
    public function quickEdit($data)
    {
        $rowsDiff = data_get($data, 'rowsDiff', []);

        foreach ($rowsDiff as $item) {
            $this->update(Arr::pull($item, $this->primaryKey()), $item);
        }

        return true;
    }

    /**
     * 快速编辑单条
     *
     * @param mixed $data
     * @return bool
     */
    public function quickEditItem($data)
    {
        return $this->update(Arr::pull($data, $this->primaryKey()), $data);
    }

    /**
     * saving 钩子 (执行于新增/修改前).
     *
     * 可以通过判断 $primaryKey 是否存在来判断是新增还是修改
     * @param mixed $data
     * @param mixed $primaryKey
     */
    public function saving(&$data, $primaryKey = '')
    {
    }

    /**
     * saved 钩子 (执行于新增/修改后).
     *
     * 可以通过 $isEdit 来判断是新增还是修改
     * @param mixed $model
     * @param mixed $isEdit
     */
    public function saved($model, $isEdit = false)
    {
    }

    /**
     * deleted 钩子 (执行于删除后).
     * @param mixed $ids
     */
    public function deleted($ids)
    {
    }

    /**
     * 重新排序菜单.
     *
     * @param mixed $ids
     * @return false|int
     */
    public function reorder($ids)
    {
        if (check_blank($ids)) {
            return false;
        }

        $ids = json_decode('[' . str_replace('[', ',[', $ids) . ']');

        $list = collect($this->refreshOrder($ids))->transform(fn($i) => $i * 10)->all();

        $sql = 'update ' . $this->getModel()->getTable() . ' set `order` = case id ';

        foreach ($list as $k => $v) {
            $sql .= " when {$k} then {$v} ";
        }

        return Db::update($sql . ' else `order` end');
    }

    public function refreshOrder($list)
    {
        $result = collect($list)->filter(fn($i) => !is_array($i))->values()->flip()->toArray();

        collect($list)->filter(fn($i) => is_array($i))->each(function ($item) use (&$result) {
            $result = $this->refreshOrder($item) + $result;
        });

        return $result;
    }
}
