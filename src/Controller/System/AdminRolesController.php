<?php
namespace HPlus\Admin\Controller\System;

use App\Exception\ApiAmisException;
use HPlus\Admin\Controller\AbstractAdminController;
use HPlus\Admin\Service\AdminPermissionService;
use HPlus\Admin\Service\AdminRoleService;
use HPlus\Route\Annotation\AdminController;
use HPlus\Route\Annotation\PostApi;
use HPlus\UI\Renderers\Form;
use HPlus\UI\Renderers\Page;
use function Hyperf\Translation\__;

#[AdminController(tag: '后台角色管理')]
class AdminRolesController extends AbstractAdminController
{
    protected string $serviceName = AdminRoleService::class;

    protected function grid(): Page
    {
        $crud = $this->baseCRUD()
            ->headerToolbar([
                $this->createButton(true),
                ...$this->baseHeaderToolBar(),
            ])
            ->filterTogglable(false)
            ->itemCheckableOn('${slug !== "administrator"}')
            ->columns([
                amis()->TableColumn()->label('ID')->name('id')->sortable(),
                amis()->TableColumn()->label(__('admin.admin_role.name'))->name('name'),
                amis()->TableColumn()->label(__('admin.admin_role.slug'))->name('slug')->type('tag'),
                amis()->TableColumn()
                    ->label(__('admin.created_at'))
                    ->name('created_at')
                    ->type('datetime')
                    ->sortable(true),
                amis()->TableColumn()
                    ->label(__('admin.updated_at'))
                    ->name('updated_at')
                    ->type('datetime')
                    ->sortable(true),
                $this->rowActions([
                    $this->setPermission(),
                    $this->rowEditButton(true),
                    $this->rowDeleteButton()->hiddenOn('${slug == "administrator"}'),
                ]),
            ]);

        return $this->baseList($crud)->css([
            '.tree-full'                   => [
                'overflow' => 'hidden !important',
            ],
            '.cxd-TreeControl > .cxd-Tree' => [
                'height'     => '100% !important',
                'max-height' => '100% !important',
            ],
        ]);
    }

    protected function setPermission()
    {
        return amis()->DrawerAction()
            ->label(__('admin.admin_role.set_permissions'))
            ->icon('fa-solid fa-gear')
            ->level('link')
            ->drawer(
                amis()->Drawer()
                    ->title(__('admin.admin_role.set_permissions'))
                    ->resizable()
                    ->closeOnOutside()
                    ->closeOnEsc()
                    ->body([
                        amis()->Form()
                            ->api(admin_url('system/admin_roles/save_permissions'))
                            ->initApi($this->getEditGetDataPath())
                            ->mode('normal')
                            ->data(['id' => '${id}'])
                            ->body([
                                amis()->TreeControl()
                                    ->name('permissions')
                                    ->label()
                                    ->multiple()
                                    ->heightAuto()
                                    ->options(AdminPermissionService::make()->getTree())
                                    ->searchable()
                                    ->cascade()
                                    ->joinValues(false)
                                    ->extractValue()
                                    ->size('full')
                                    ->className('h-full b-none')
                                    ->inputClassName('h-full tree-full')
                                    ->labelField('name')
                                    ->valueField('id'),
                            ]),
                    ])
            );
    }

    #[PostApi(summary: '保存权限')]
    public function savePermissions()
    {
        $data = $this->request->all();

        $result = $this->service->savePermissions($data[$this->service->primaryKey()], $data['permissions'] ?? []);

        return $this->autoResponse($result, __('admin.save'));
    }

    protected function form(): Form
    {
        return $this->baseForm()->body([
            amis()->TextControl()->label(__('admin.admin_role.name'))->name('name')->required(),
            amis()->TextControl()
                ->label(__('admin.admin_role.slug'))
                ->name('slug')
                ->description(__('admin.admin_role.slug_description'))
                ->required(),
        ]);
    }

    public function detail(): Form
    {
        return $this->baseDetail()->body([]);
    }
}
