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

namespace HPlus\Admin\Controller\System;

use HPlus\Admin\Controller\AbstractAdminController;
use HPlus\Admin\Service\AdminRoleService;
use HPlus\Admin\Service\AdminUserService;
use HPlus\Route\Annotation\AdminController;
use HPlus\UI\Renderers\Form;
use HPlus\UI\Renderers\Page;

use function Hyperf\Translation\__;

#[AdminController(tag: '后台管理员')]
class AdminUsersController extends AbstractAdminController
{
    protected string $serviceName = AdminUserService::class;

    public function grid(): Page
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
            ->itemCheckableOn('${!administrator}')
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
            amis()->ImageControl('avatar', __('admin.admin_user.avatar'))->receiver($this->uploadImagePath()),
            amis()->TextControl('username', __('admin.username'))->required(),
            amis()->TextControl('name', __('admin.admin_user.name'))->required(),
            amis()->TextControl('password', __('admin.password'))->type('input-password'),
            amis()->TextControl('confirm_password', __('admin.confirm_password'))->type('input-password'),
            amis()->SelectControl('roles', __('admin.admin_user.roles'))
                ->searchable()
                ->multiple()
                ->labelField('name')
                ->valueField('id')
                ->joinValues(false)
                ->extractValue()
                ->options(AdminRoleService::make()->query()->get(['id', 'name'])),
            amis()->SwitchControl('enabled', __('admin.extensions.card.status'))
                ->onText(__('admin.extensions.enable'))
                ->offText(__('admin.extensions.disable'))
                ->disabledOn('${id == 1}')
                ->value(1),
        ]);
    }

    public function detail(): Form
    {
        return $this->baseDetail()->body([]);
    }
}
