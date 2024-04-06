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

namespace HPlus\Admin;

use HPlus\Admin\Exception\ApiAmisException;
use HPlus\Admin\Model\AdminMenu;
use HPlus\Admin\Model\AdminPermission;
use HPlus\Admin\Model\AdminRole;
use HPlus\Admin\Model\AdminUser;
use HPlus\Admin\Service\AdminSettingService;
use HPlus\Admin\Support\Core\Menu;
use Hyperf\Context\ApplicationContext;
use Psr\Container\ContainerExceptionInterface;
use Psr\Container\NotFoundExceptionInterface;

use function Hyperf\Config\config;

class Admin
{
    public static function responseToast($message = '', $doNotDisplayToast = 1, $status = 0): array
    {
        return self::responseData([], $message, $status, $doNotDisplayToast);
    }

    public static function responseMessage($message = '', $status = 0)
    {
        return self::responseData([], $message, $status);
    }

    public static function responseData($data = [], $message = '', $status = 0, $doNotDisplayToast = 0)
    {
        return compact('data', 'message', 'status', 'doNotDisplayToast');
    }

    public static function responseError($message = '', $data = [], $status = 1)
    {
        throw new ApiAmisException($message, $status);
    }

    public static function config(string $string, $default = null)
    {
        return config($string, $default);
    }

    public static function setting()
    {
        return ApplicationContext::getContainer()->get(AdminSettingService::class);
    }

    /**
     * @return Menu|mixed
     * @throws ContainerExceptionInterface
     * @throws NotFoundExceptionInterface
     */
    public static function menu()
    {
        return ApplicationContext::getContainer()->get(Menu::class);
    }

    public static function user()
    {
        return auth('admin')->user();
    }

    public static function adminMenuModel()
    {
        return config('admin.database.menu_model', AdminMenu::class);
    }

    public static function adminUserModel()
    {
        return config('admin.database.user_model', AdminUser::class);
    }

    public static function adminRoleModel()
    {
        return config('admin.database.role_model', AdminRole::class);
    }

    public static function adminPermissionModel()
    {
        return config('admin.database.permission_model', AdminPermission::class);
    }
}
