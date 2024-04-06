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

use Laravel\Sanctum\PersonalAccessToken as SanctumPersonalAccessToken;
use Slowlyo\OwlAdmin\Admin;

class PersonalAccessToken extends SanctumPersonalAccessToken
{
    public function __construct(array $attributes = [])
    {
        $this->setConnection(Admin::config('admin.database.connection'));

        parent::__construct($attributes);
    }

    public static function findToken($token)
    {
        $expiration = config('admin.auth.token_expiration');

        if (! str_contains($token, '|')) {
            return static::where('token', hash('sha256', $token))
                ->when($expiration, fn ($q) => $q->where('created_at', '>=', now()->subMinutes($expiration)))
                ->first();
        }

        [$id, $token] = explode('|', $token, 2);

        $instance = static::when($expiration, fn ($q) => $q->where('created_at', '>=', now()->subMinutes($expiration)))
            ->find($id);

        if ($instance) {
            return hash_equals($instance->token, hash('sha256', $token)) ? $instance : null;
        }

        return null;
    }
}
