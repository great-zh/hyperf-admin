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
use HPlus\Admin\Model\AdminUser;
use HPlus\Admin\Support\Core\Hash;
use Hyperf\Collection\Arr;
use Hyperf\Database\Model\Collection;
use Hyperf\Database\Model\Model;
use Hyperf\Database\Query\Builder;

use function Hyperf\Collection\data_get;
use function Hyperf\Support\make;
use function Hyperf\Translation\__;

/**
 * @method AdminUser getModel()
 * @method AdminUser|Builder query()
 */
class AdminUserService extends AdminBaseService
{
    public function __construct()
    {
        $this->modelName = Admin::adminUserModel();
    }

    public function getEditData($id): null|array|Builder|Collection|Model
    {
        $adminUser = parent::getEditData($id)->makeHidden('password');

        $adminUser->load('roles');

        return $adminUser;
    }

    /**
     * @param mixed $data
     * @throws ApiAmisException
     */
    public function store($data)
    {
        $this->checkUsernameUnique($data['username']);

        admin_abort_if(! data_get($data, 'password'), __('admin.required', ['attribute' => __('admin.password')]));

        $this->passwordHandler($data);

        $columns = $this->getTableColumns();

        $model = $this->getModel();

        return $this->saveData($data, $columns, $model);
    }

    public function update($primaryKey, $data)
    {
        $this->checkUsernameUnique($data['username'], $primaryKey);
        $this->passwordHandler($data);

        $columns = $this->getTableColumns();

        $model = $this->query()->whereKey($primaryKey)->first();

        return $this->saveData($data, $columns, $model);
    }

    public function checkUsernameUnique($username, $id = 0)
    {
        $exists = $this->query()
            ->where('username', $username)
            ->when($id, fn ($query) => $query->where('id', '<>', $id))
            ->exists();

        admin_abort_if($exists, __('admin.admin_user.username_already_exists'));
    }

    public function updateUserSetting($primaryKey, $data): bool
    {
        $this->passwordHandler($data, $primaryKey);

        return parent::update($primaryKey, $data);
    }

    public function passwordHandler(&$data, $id = null)
    {
        $password = Arr::get($data, 'password');

        if ($password) {
            admin_abort_if($password !== Arr::get($data, 'confirm_password'), __('admin.admin_user.password_confirmation'));
            /** @var Hash $hash */
            $hash = make(Hash::class);
            if ($id) {
                admin_abort_if(! Arr::get($data, 'old_password'), __('admin.admin_user.old_password_required'));

                $oldPassword = $this->query()->where('id', $id)->value('password');

                admin_abort_if(! $hash->check($data['old_password'], $oldPassword), __('admin.admin_user.old_password_error'));
            }
            $data['password'] = $hash->make($password);
            unset($data['confirm_password'], $data['old_password']);
        }
    }

    public function list()
    {
        $keyword = $params['keyword'] ?? null;

        $query = $this->query()
            ->with('roles')
            ->select(['id', 'name', 'username', 'avatar', 'enabled', 'created_at'])
            ->when($keyword, function ($query) use ($keyword) {
                $query->where('username', 'like', "%{$keyword}%")->orWhere('name', 'like', "%{$keyword}%");
            });

        $this->sortable($query);

        $list = $query->paginate((int)$this->request->query('perPage', 20));
        $items = $list->items();
        $total = $list->total();

        return compact('items', 'total');
    }

    public function delete(string $ids)
    {
        $exists = $this->query()
            ->whereIn($this->primaryKey(), explode(',', $ids))
            ->whereHas('roles', fn ($q) => $q->where('slug', 'administrator'))
            ->exists();

        admin_abort_if($exists, __('admin.admin_user.cannot_delete'));

        return parent::delete($ids);
    }

    /**
     * @param mixed $data
     * @return bool
     */
    protected function saveData($data, array $columns, AdminUser $model)
    {
        $roles = Arr::pull($data, 'roles');

        foreach ($data as $k => $v) {
            if (! in_array($k, $columns)) {
                continue;
            }

            $model->setAttribute($k, $v);
        }

        if ($model->save()) {
            $model->roles()->sync(Arr::has($roles, '0.id') ? Arr::pluck($roles, 'id') : $roles);

            return true;
        }

        return false;
    }
}
