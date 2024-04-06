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

class Extension extends BaseModel
{
    protected array $fillable = ['name', 'is_enabled', 'options'];

    protected array $casts = [
        'options' => 'json',
    ];

    protected ?string $table = 'admin_extensions';
}
