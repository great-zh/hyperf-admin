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

use HPlus\Admin\Admin;
use HPlus\Admin\Exception\ApiAmisException;
use HPlus\Admin\Model\AdminRole;
use Hyperf\Collection\Arr;
use Hyperf\Database\Model\Collection;
use Hyperf\Database\Model\Model;
use Hyperf\Database\Query\Builder;

use function Hyperf\Translation\__;

/**
 * @method AdminRole getModel()
 * @method AdminRole|Builder query()
 */
class AdminRoleService extends AdminBaseService
{
    public function __construct()
    {
        $this->modelName = Admin::adminRoleModel();
    }

    public function getEditData($id): null|array|Builder|Collection|Model
    {
        $permission = parent::getEditData($id);

        $permission->load(['permissions']);

        return $permission;
    }

    public function store($data)
    {
        $this->checkRepeated($data);

        $columns = $this->getTableColumns();

        $model = $this->getModel();

        foreach ($data as $k => $v) {
            if (! in_array($k, $columns)) {
                continue;
            }

            $model->setAttribute($k, $v);
        }

        return $model->save();
    }

    public function update($primaryKey, $data)
    {
        $this->checkRepeated($data, $primaryKey);

        $columns = $this->getTableColumns();

        $model = $this->query()->whereKey($primaryKey)->first();

        foreach ($data as $k => $v) {
            if (! in_array($k, $columns)) {
                continue;
            }

            $model->setAttribute($k, $v);
        }

        return $model->save();
    }

    /**
     * @param mixed $data
     * @param mixed $id
     * @throws ApiAmisException
     */
    public function checkRepeated($data, $id = 0)
    {
        $query = $this->query()->when($id, fn ($query) => $query->where('id', '<>', $id));

        amis_abort_if($query->clone()
            ->where('name', $data['name'])
            ->exists(), __('admin.admin_role.name_already_exists'));

        amis_abort_if($query->clone()
            ->where('slug', $data['slug'])
            ->exists(), __('admin.admin_role.slug_already_exists'));
    }

    public function savePermissions($primaryKey, $permissions)
    {
        $model = $this->query()->whereKey($primaryKey)->first();

        return $model->permissions()->sync(
            Arr::has($permissions, '0.id') ? Arr::pluck($permissions, 'id') : $permissions
        );
    }

    public function delete(string $ids)
    {
        $_ids = explode(',', $ids);
        $exists = $this->query()
            ->whereIn($this->primaryKey(), $_ids)
            ->where('slug', 'administrator')
            ->exists();

        admin_abort_if($exists, __('admin.admin_role.cannot_delete'));

        $used = $this->query()
            ->whereIn($this->primaryKey(), $_ids)
            ->has('users')
            ->exists();

        admin_abort_if($used, __('admin.admin_role.used'));

        return parent::delete($ids);
    }
}
