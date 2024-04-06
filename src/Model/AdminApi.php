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
use Illuminate\Database\Eloquent\Casts\Attribute;
use ReflectionClass;
use Slowlyo\OwlAdmin\Support\Apis\AdminBaseApi;

class AdminApi extends BaseModel
{
    use HasTimestamps;

    public const METHODS = ['get', 'head', 'post', 'put', 'patch', 'delete', 'options'];

    protected $appends = ['template_title', 'method'];

    protected $casts = [
        'args' => 'json',
    ];

    public function templateTitle(): Attribute
    {
        return Attribute::get(function () {
            if (! (new ReflectionClass($this->template))->isSubclassOf(AdminBaseApi::class)) {
                return '';
            }

            return app($this->template)->getTitle();
        });
    }

    public function method(): Attribute
    {
        return Attribute::get(function () {
            if (! (new ReflectionClass($this->template))->isSubclassOf(AdminBaseApi::class)) {
                return 'any';
            }

            $method = app($this->template)->getMethod();

            return in_array($method, self::METHODS) ? $method : 'any';
        });
    }
}
