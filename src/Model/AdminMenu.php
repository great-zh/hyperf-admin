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

use Hyperf\Database\Model\Relations\BelongsTo;

use function Hyperf\Translation\__;

class AdminMenu extends BaseModel
{
    public const TYPE_ROUTE = 1;

    public const TYPE_LINK = 2;

    public const TYPE_IFRAME = 3;

    public const TYPE_PAGE = 4;

    protected array $guarded = [];

    public static function getType(): array
    {
        return [
            self::TYPE_ROUTE => __('admin.admin_menu.route'),
            self::TYPE_LINK => __('admin.admin_menu.link'),
            self::TYPE_IFRAME => __('admin.admin_menu.iframe'),
            self::TYPE_PAGE => __('admin.admin_menu.page'),
        ];
    }

    /**
     * 父级菜单.
     */
    public function parent(): BelongsTo
    {
        return $this->belongsTo(self::class, 'parent_id');
    }

    public function getTitleAttribute($value)
    {
        $transKey = ($this->extension ? $this->extension . '::' : '') . "menu.{$value}";
        $translate = __($transKey);

        return $translate == $transKey ? $value : $translate;
    }
}
