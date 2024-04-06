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

class AdminSetting extends BaseModel
{
    protected ?string $table = 'admin_settings';

    protected string $primaryKey = 'key';

    protected array $guarded = [];

    protected array $casts = [
        'values' => 'json',
    ];
}
