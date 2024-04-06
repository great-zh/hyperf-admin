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

namespace HPlus\Admin\Traits;

use HPlus\Admin\Support\Core\Asset;
use Hyperf\Context\ApplicationContext;

trait AssetsTrait
{
    /**
     * @return Asset;
     */
    public static function asset()
    {
        return ApplicationContext::getContainer()->get(Asset::class);
    }

    /**
     * 加载 js 文件.
     *
     * @param null|mixed $js
     * @return Asset
     */
    public static function js($js = null)
    {
        return static::asset()->js($js);
    }

    /**
     * 加载 css 文件.
     *
     * @param null|mixed $css
     * @return Asset
     */
    public static function css($css = null)
    {
        return static::asset()->css($css);
    }

    /**
     * 加载 js 脚本.
     *
     * @param null|mixed $scripts
     * @return Asset
     */
    public static function scripts($scripts = null)
    {
        return static::asset()->scripts($scripts);
    }

    /**
     * 加载样式表.
     *
     * @param null|mixed $styles
     * @return Asset
     */
    public static function styles($styles = null)
    {
        return static::asset()->styles($styles);
    }

    public static function getAssets()
    {
        return [
            'js' => static::asset()->js(),
            'css' => static::asset()->css(),
            'scripts' => static::asset()->scripts(),
            'styles' => static::asset()->styles(),
        ];
    }

    /**
     * 在后面添加 Nav.
     *
     * @param null|mixed $appendNav
     * @return Asset
     */
    public static function appendNav($appendNav = null)
    {
        return static::asset()->appendNav($appendNav);
    }

    /**
     * 在前面添加 Nav.
     *
     * @param null|mixed $prependNav
     * @return Asset
     */
    public static function prependNav($prependNav = null)
    {
        return static::asset()->prependNav($prependNav);
    }

    public static function getNav()
    {
        return [
            'appendNav' => static::asset()->appendNav(),
            'prependNav' => static::asset()->prependNav(),
        ];
    }
}
