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

use Hyperf\Database\Model\Model;

use function Hyperf\Config\config;

class BaseModel extends Model
{
    public function __construct(array $attributes = [])
    {
        $this->setConnection(config('admin.database.connection'));
        parent::__construct($attributes);
    }
}
