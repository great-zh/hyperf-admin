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

class AdminCodeGenerator extends BaseModel
{
    use HasTimestamps;

    protected $casts = [
        'columns' => 'array',
        'needs' => 'array',
        'menu_info' => 'array',
        'page_info' => 'array',
        'save_path' => 'array',
    ];
}
