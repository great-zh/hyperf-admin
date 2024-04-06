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

namespace HPlus\Admin\Model;

use Hyperf\Database\Model\Collection;
use Hyperf\Database\Model\Events\Deleting;
use Qbhy\HyperfAuth\Authenticatable;
use Slowlyo\OwlAdmin\Admin;

use function Hyperf\Config\config;

class AdminUser extends BaseModel implements Authenticatable
{
    protected array $appends = ['administrator'];

    protected array $guarded = [];

    public function __construct(array $attributes = [])
    {
        $this->setConnection(config('admin.database.connection'));

        parent::__construct($attributes);
    }

    public function roles()
    {
        return $this->belongsToMany(AdminRole::class, 'admin_role_users', 'user_id', 'role_id')->withTimestamps();
    }

    //    public function getAvatarAttribute(): Attribute
    //    {
    //        $storage = \Illuminate\Support\Facades\Storage::disk(Admin::config('admin.upload.disk'));
    //
    //        return Attribute::make(
    //            get: fn($value) => $value ? admin_resource_full_path($value) : url(Admin::config('admin.default_avatar')),
    //            set: fn($value) => str_replace($storage->url(''), '', $value)
    //        );
    //    }

    public function deleting(Deleting $event)
    {
        $event->getModel()->roles()->detach();
    }

    public function allPermissions(): Collection
    {
        return $this->roles()->with('permissions')->get()->pluck('permissions')->flatten();
    }

    public function can($abilities, $arguments = []): bool
    {
        if (empty($abilities)) {
            return true;
        }

        if ($this->isAdministrator()) {
            return true;
        }

        return $this->roles->pluck('permissions')->flatten()->pluck('slug')->contains($abilities);
    }

    public function isAdministrator(): bool
    {
        return $this->isRole('administrator');
    }

    public function isRole(string $role): bool
    {
        return $this->roles->pluck('slug')->contains($role);
    }

    public function inRoles(array $roles = []): bool
    {
        return $this->roles->pluck('slug')->intersect($roles)->isNotEmpty();
    }

    public function visible(array $roles = []): bool
    {
        if ($this->isAdministrator()) {
            return true;
        }
        if (empty($roles)) {
            return false;
        }
        $roles = array_column($roles, 'slug');

        return $this->inRoles($roles);
    }

        public function getAdministratorAttribute()
        {
            return $this->isAdministrator();
        }

    public function getId()
    {
        return $this->id;
    }

    public static function retrieveById($key): ?Authenticatable
    {
        return self::find($key);
    }
}
