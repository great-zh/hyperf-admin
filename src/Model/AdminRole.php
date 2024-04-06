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

use Hyperf\Database\Model\Concerns\HasTimestamps;
use Hyperf\Database\Model\Events\Deleting;
use Hyperf\Database\Model\Relations\BelongsToMany;

class AdminRole extends BaseModel
{
    use HasTimestamps;

    public function permissions(): BelongsToMany
    {
        return $this->belongsToMany(AdminPermission::class, 'admin_role_permissions', 'role_id', 'permission_id')
            ->withTimestamps();
    }

    public function deleting(Deleting $event)
    {
        $event->getModel()->permissions()->detach();
    }

    public function users()
    {
        return $this->belongsToMany(AdminUser::class, 'admin_role_users', 'role_id', 'user_id')->withTimestamps();
    }
}
