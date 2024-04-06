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

namespace HPlus\Admin\Controller;

use HPlus\Admin\Admin;
use HPlus\Admin\Model\Extension;
use HPlus\Route\Annotation\AdminController;
use HPlus\Route\Annotation\GetApi;
use HPlus\Route\Annotation\PostApi;
use HPlus\UI\UI;

use function Hyperf\Translation\__;

#[AdminController(tag: '后台设置模块')]
class SettingController extends AbstractAdminController
{
    #[GetApi(summary: '获取系配置统')]
    public function config()
    {
        return [
            'nav' => UI::getNav(),
            'assets' => UI::getAssets(),
            'app_name' => Admin::config('admin.name'),
            'locale' => Admin::config('app.locale'),
            'layout' => Admin::config('admin.layout'),
            'logo' => Admin::config('admin.logo'),

            'login_captcha' => Admin::config('admin.auth.login_captcha'),
            'show_development_tools' => Admin::config('admin.show_development_tools'),
            'system_theme_setting' => Admin::setting()->get('system_theme_setting'),
            'enabled_extensions' => Extension::query()->where('is_enabled', 1)->pluck('name')?->toArray(),
        ];
    }

    #[PostApi(path: 'config', summary: '获取系配置统')]
    public function update()
    {
        $data = $this->request->all();
        foreach ($data as $key => $value) {
            if ($key == 'system_theme_setting') {
                $data[$key] = $value;
            } else {
                unset($data[$key]);
            }
        }
        Admin::setting()->setMany($data);
        return Admin::responseMessage(__('admin.save_success'));
    }
}
