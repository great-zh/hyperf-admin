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
use HPlus\Admin\Model\AdminUser;
use HPlus\Route\Annotation\AdminController;
use HPlus\Route\Annotation\GetApi;
use HPlus\Route\Annotation\PostApi;
use HPlus\UI\Renderers\Form;
use HPlus\UI\Renderers\Page;
use Qbhy\HyperfAuth\Exception\UnauthorizedException;

use function Hyperf\Translation\__;

#[AdminController(tag: '后台用户模块')]
class UserController extends AbstractAdminController
{
    public function list(): Page
    {
        $crud = $this->baseCRUD()
            ->headerToolbar([
                $this->createButton(true),
                ...$this->baseHeaderToolBar(),
            ])
            ->filter($this->baseFilter()->body(
                amis()->TextControl('keyword', __('admin.keyword'))
                    ->size('md')
                    ->placeholder(__('admin.admin_user.search_username'))
            ))
            ->columns([
                amis()->TableColumn('id', 'ID')->sortable(),
                amis()->TableColumn('avatar', __('admin.admin_user.avatar'))->type('avatar')->src('${avatar}'),
                amis()->TableColumn('username', __('admin.username')),
                amis()->TableColumn('name', __('admin.admin_user.name')),
                amis()->TableColumn('roles', __('admin.admin_user.roles'))->type('each')->items(
                    amis()->Tag()->label('${name}')->className('my-1')
                ),
                amis()->TableColumn('enabled', __('admin.extensions.card.status'))->quickEdit(
                    amis()->SwitchControl()->mode('inline')->disabledOn('${id == 1}')->saveImmediately(true)
                ),
                amis()->TableColumn('created_at', __('admin.created_at'))->type('datetime')->sortable(true),
                $this->rowActions([
                    $this->rowEditButton(true),
                    $this->rowDeleteButton()->hiddenOn('${administrator}'),
                ]),
            ]);

        return $this->baseList($crud);
    }

    public function form(): Form
    {
        return $this->baseForm()->body([
            //            amis()->ImageControl('avatar', __('admin.admin_user.avatar'))->receiver($this->uploadImagePath()),
            amis()->TextControl('username', __('admin.username'))->required(),
            amis()->TextControl('name', __('admin.admin_user.name'))->required(),
            amis()->TextControl('password', __('admin.password'))->type('input-password'),
            amis()->TextControl('confirm_password', __('admin.confirm_password'))->type('input-password'),
            //            amis()->SelectControl('roles', __('admin.admin_user.roles'))
            //                ->searchable()
            //                ->multiple()
            //                ->labelField('name')
            //                ->valueField('id')
            //                ->joinValues(false)
            //                ->extractValue()
            //                ->options(AdminRoleService::make()->query()->get(['id', 'name'])),
            amis()->SwitchControl('enabled', __('admin.extensions.card.status'))
                ->onText(__('admin.extensions.enable'))
                ->offText(__('admin.extensions.disable'))
                ->disabledOn('${id == 1}')
                ->value(1),
        ]);
    }

    #[GetApi(summary: '验证码')]
    public function captcha()
    {
        return [];
    }

    #[GetApi(summary: '验证码')]
    public function example()
    {
        throw new UnauthorizedException('用户名或密码错误！');
    }

    #[GetApi(summary: '菜单列表')]
    public function menus()
    {
        return Admin::responseData(Admin::menu()->all());
    }

    #[GetApi(summary: '用户信息', path: 'current-user')]
    public function info($id = 0)
    {
        return [
            'name' => '超级管理员',
            'avatar' => 'http://demo.owladmin.com/admin-assets/default-avatar.png',
            'menus' => [
                'type' => 'dropdown-button',
                'hideCaret' => true,
                'trigger' => 'hover',
                'label' => '超级管理员',
                'className' => 'h-full w-full',
                'btnClassName' => 'navbar-user w-full',
                'menuClassName' => 'min-w-0 p-2',
                'icon' => 'http://demo.owladmin.com/admin-assets/default-avatar.png',
                'buttons' => [
                    [
                        'type' => 'button',
                        'iconClassName' => 'pr-2',
                        'icon' => 'fa fa-user-gear',
                        'label' => '个人设置',
                        'onClick' => 'window.location.hash = "#/user_setting"',
                    ],
                    [
                        'type' => 'button',
                        'iconClassName' => 'pr-2',
                        'label' => '退出登录',
                        'icon' => 'fa-solid fa-right-from-bracket',
                        'onClick' => 'window.$owl.logout()',
                    ],
                ],
            ],
        ];
    }

    #[PostApi(summary: '登录')]
    public function login()
    {
        return Admin::responseData([
            'token' => auth('admin')->login(AdminUser::first()),
        ]);
        throw new UnauthorizedException('用户名或密码错误！');
    }
}
