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

use HPlus\Admin\Admin;
use Hyperf\Database\Model\Events\Deleting;
use Hyperf\Database\Model\Relations\BelongsToMany;
use Hyperf\HttpMessage\Base\Request;
use Hyperf\Stringable\Str;
use function Hyperf\Collection\collect;

class AdminPermission extends BaseModel
{
    public static array $httpMethods = [
        'GET',
        'POST',
        'PUT',
        'DELETE',
        'PATCH',
        'OPTIONS',
        'HEAD',
    ];

    protected array $casts = [
        'http_method' => 'array',
        'http_path' => 'array',
    ];

    protected array $fillable = ['sign'];

    public function menus(): BelongsToMany
    {
        return $this->belongsToMany(AdminMenu::class, 'admin_permission_menu', 'permission_id', 'menu_id')
            ->withTimestamps();
    }

    public function shouldPassThrough(Request $request): bool
    {
        if (empty($this->http_method) && empty($this->http_path)) {
            return true;
        }
        $method = $this->http_method;
        $matches = array_map(function ($path) use ($method) {
            $path = trim(Admin::config('admin.route.prefix'), '/') . $path;
            if (Str::contains($path, ':')) {
                [$method, $path] = explode(':', $path);
                $method = explode(',', $method);
            }
            return compact('method', 'path');
        }, $this->http_path);
        foreach ($matches as $match) {
            if ($this->matchRequest($match, $request)) {
                return true;
            }
        }
        return false;
    }

    protected function matchRequest(array $match, Request $request): bool
    {
        if ($match['path'] == '/') {
            $path = '/';
        } else {
            $path = trim($match['path'], '/');
        }
        if (! $request->is($path)) {
            return false;
        }
        $method = collect($match['method'])->filter()->map(function ($method) {
            return strtoupper($method);
        });
        return $method->isEmpty() || $method->contains($request->method());
    }

    public function deleting(Deleting $event)
    {
        $event->getMethod()->menus()->detach();
    }

}
