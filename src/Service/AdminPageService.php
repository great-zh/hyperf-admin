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

use HPlus\Admin\Model\AdminPage;
use Hyperf\Database\Query\Builder;
use function Hyperf\Collection\data_get;

/**
 * @method AdminPage getModel()
 * @method AdminPage|Builder query()
 */
class AdminPageService extends AdminBaseService
{
    public string $cacheKeyPrefix = 'admin_page:';

    protected ?string $modelName = AdminPage::class;

    public function saving(&$data, $primaryKey = '')
    {
        $data['schema'] = data_get($data, 'page.schema');
        admin_abort_if(check_blank($data['schema']), __('admin.pages.schema_cannot_be_empty'));
        unset($data['page']);

        $exists = $this->query()
            ->where('sign', $data['sign'])
            ->when($primaryKey, fn ($q) => $q->where('id', '<>', $primaryKey))
            ->exists();

        admin_abort_if($exists, __('admin.pages.sign_exists'));
    }

    public function saved($model, $isEdit = false)
    {
        if ($isEdit) {
            cache()->delete($this->cacheKeyPrefix . $model->sign);
        }
    }

    public function delete(string $ids)
    {
        $this->query()->whereIn('id', explode(',', $ids))->get()->map(function ($item) {
            cache()->delete($this->cacheKeyPrefix . $item->sign);
        });

        return parent::delete($ids);
    }

    public function getEditData($id): \Hyperf\Database\Model\Collection|Builder|\Hyperf\Database\Model\Model|array|null
    {
        $data = parent::getEditData($id);

        $data->setAttribute('page', ['schema' => $data->schema]);
        $data->setAttribute('schema', '');

        return $data;
    }

    /**
     * 获取页面结构.
     *
     * @param mixed $sign
     * @return mixed
     */
    public function get($sign)
    {
        return cache_has_set($this->cacheKeyPrefix . $sign, function () use ($sign) {
            return $this->query()->where('sign', $sign)->value('schema');
        });
    }

    public function options()
    {
        return $this->query()->get(['sign as value', 'title as label']);
    }
}
