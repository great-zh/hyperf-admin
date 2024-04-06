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

use HPlus\UI\Renderers\AjaxAction;
use HPlus\UI\Renderers\ConditionBuilderControl;
use HPlus\UI\Renderers\CRUDTable;
use HPlus\UI\Renderers\DialogAction;
use HPlus\UI\Renderers\Form;
use HPlus\UI\Renderers\LinkAction;
use HPlus\UI\Renderers\Operation;
use HPlus\UI\Renderers\OtherAction;
use HPlus\UI\Renderers\Page;
use HPlus\UI\Renderers\Service;

use function Hyperf\Config\config;
use function Hyperf\Translation\__;

trait HasElementTrait
{
    /**
     * 基础页面.
     */
    protected function basePage(): Page
    {
        return amis()->Page()->className('m:overflow-auto');
    }

    /**
     * 返回列表按钮.
     */
    protected function backButton(): OtherAction
    {
        $path = str_replace(config('admin.route.prefix'), '', $this->request->path());
        $script = sprintf('window.$owl.hasOwnProperty(\'closeTabByPath\') && window.$owl.closeTabByPath(\'%s\')', $path);
        return amis()->OtherAction()
            ->label(__('admin.back'))
            ->icon('fa-solid fa-chevron-left')
            ->level('primary')
            ->onClick('window.history.back();' . $script);
    }

    /**
     * 批量删除按钮.
     */
    protected function bulkDeleteButton(): AjaxAction
    {
        return amis()->AjaxAction()
            ->api($this->getBulkDeletePath())
            ->icon('fa-solid fa-trash-can')
            ->label(__('admin.delete'))
            ->confirmText(__('admin.confirm_delete'));
    }

    /**
     * 新增按钮.
     */
    protected function createButton(bool $dialog = false, string $dialogSize = ''): DialogAction|LinkAction
    {
        if ($dialog) {
            $form = $this->form(false)->api($this->getStorePath())->onEvent([]);
            $button = amis()->DialogAction()->dialog(
                amis()->Dialog()->title(__('admin.create'))->body($form)->size($dialogSize)
            );
        } else {
            $button = amis()->LinkAction()->link($this->getCreatePath());
        }

        return $button->label(__('admin.create'))->icon('fa fa-add')->level('primary');
    }

    /**
     * 行编辑按钮.
     */
    protected function rowEditButton(bool $dialog = false, string $dialogSize = ''): DialogAction|LinkAction
    {
        if ($dialog) {
            $form = $this->form(true)
                ->api($this->getUpdatePath())
                ->initApi($this->getEditGetDataPath())
                ->redirect('')
                ->onEvent([]);

            $button = amis()->DialogAction()->dialog(
                amis()->Dialog()->title(__('admin.edit'))->body($form)->size($dialogSize)
            );
        } else {
            $button = amis()->LinkAction()->link($this->getEditPath());
        }

        return $button->label(__('admin.edit'))->icon('fa-regular fa-pen-to-square')->level('link');
    }

    /**
     * 行详情按钮.
     */
    protected function rowShowButton(bool $dialog = false, string $dialogSize = ''): DialogAction|LinkAction
    {
        if ($dialog) {
            $button = amis()->DialogAction()->dialog(
                amis()->Dialog()->title(__('admin.show'))->body($this->detail('$id'))->size($dialogSize)
            );
        } else {
            $button = amis()->LinkAction()->link($this->getShowPath());
        }

        return $button->label(__('admin.show'))->icon('fa-regular fa-eye')->level('link');
    }

    /**
     * 行删除按钮.
     */
    protected function rowDeleteButton(): AjaxAction
    {
        return amis()->AjaxAction()
            ->label(__('admin.delete'))
            ->icon('fa-regular fa-trash-can')
            ->level('link')
            ->confirmText(__('admin.confirm_delete'))
            ->api($this->getDeletePath());
    }

    /**
     * 操作列.
     *
     * @param bool $dialog
     */
    protected function rowActions(array|bool $dialog = false, string $dialogSize = ''): Operation
    {
        if (is_array($dialog)) {
            return amis()->Operation()->label(__('admin.actions'))->buttons($dialog);
        }

        return amis()->Operation()->label(__('admin.actions'))->buttons([
            $this->rowShowButton($dialog, $dialogSize),
            $this->rowEditButton($dialog, $dialogSize),
            $this->rowDeleteButton(),
        ]);
    }

    /**
     * 基础筛选器.
     */
    protected function baseFilter(): Form
    {
        return amis()->Form()
            ->panelClassName('base-filter')
            ->title('')
            ->actions([
                amis()->Button()->label(__('admin.reset'))->actionType('clear-and-submit'),
                amis('submit')->label(__('admin.search'))->level('primary'),
            ]);
    }

    /**
     * 基础筛选器 - 条件构造器.
     */
    protected function baseFilterConditionBuilder(): ConditionBuilderControl
    {
        return amis()->ConditionBuilderControl('filter_condition_builder');
    }

    protected function baseCRUD(): CRUDTable
    {
        $crud = amis()->CRUDTable()
            ->perPage(20)
            ->affixHeader(false)
            ->filterTogglable()
            ->filterDefaultVisible(false)
            ->api($this->getListGetDataPath())
            ->quickSaveApi($this->getQuickEditPath())
            ->quickSaveItemApi($this->getQuickEditItemPath())
            ->bulkActions([$this->bulkDeleteButton()])
            ->perPageAvailable([10, 20, 30, 50, 100, 200])
            ->footerToolbar(['switch-per-page', 'statistics', 'pagination'])
            ->headerToolbar([
                $this->createButton(),
                ...$this->baseHeaderToolBar(),
            ]);

        if (isset($this->service)) {
            $crud->set('primaryField', $this->service->primaryKey());
        }

        return $crud;
    }

    protected function baseHeaderToolBar()
    {
        return [
            'bulkActions',
            amis('reload')->align('right'),
            amis('filter-toggler')->align('right'),
        ];
    }

    /**
     * 基础表单.
     */
    protected function baseForm(bool $back = true): Form
    {
        $path = str_replace(config('admin.route.prefix'), '', $this->request->path());

        $form = amis()->Form()->panelClassName('px-48 m:px-0')->title(' ')->mode('horizontal');

        if ($back) {
            $form->onEvent([
                'submitSucc' => [
                    'actions' => [
                        ['actionType' => 'custom', 'script' => 'window.history.back()'],
                        [
                            'actionType' => 'custom',
                            'script' => sprintf('window.$owl.hasOwnProperty(\'closeTabByPath\') && window.$owl.closeTabByPath(\'%s\')', $path),
                        ],
                    ],
                ],
            ]);
        }

        return $form;
    }

    protected function baseDetail(): Form
    {
        return amis()->Form()
            ->panelClassName('px-48 m:px-0')
            ->title(' ')
            ->mode('horizontal')
            ->actions([])
            ->initApi($this->getShowGetDataPath());
    }

    /**
     * 基础列表.
     * @param mixed $crud
     */
    protected function baseList($crud): Page
    {
        return $this->basePage()->body($crud);
    }

    /**
     * 导出按钮.
     *
     * @param bool $disableSelectedItem
     */
    protected function exportAction($disableSelectedItem = false): Service
    {
        // 获取主键名称
        $primaryKey = $this->service->primaryKey();
        // 下载路径
        $downloadPath = admin_url('_download_export', true);
        // 导出接口地址
        $exportPath = $this->getExportPath();
        // 无数据提示
        $pageNoData = __('admin.export.page_no_data');
        // 选中行无数据提示
        $selectedNoData = __('admin.export.selected_rows_no_data');
        // 按钮点击事件
        $event = fn ($script) => ['click' => ['actions' => [['actionType' => 'custom', 'script' => $script]]]];
        // 导出处理动作
        $doAction = "doAction([{actionType:'setValue',componentId:'export-action',args:{value:{showExportLoading:true}}},{actionType:'ajax',args:{api:{url:url.toString(),method:'get'}}},{actionType:'setValue',componentId:'export-action',args:{value:{showExportLoading:false}}},{actionType:'custom',expression:'\${event.data.responseResult.responseStatus===0}',script:'window.open(\\'{$downloadPath}?path=\\'+event.data.responseResult.responseData.path)'}])";
        // 按钮
        $buttons = [
            // 导出全部
            amis()->VanillaAction()->label(__('admin.export.all'))->onEvent(
                $event("let data=event.data;let params=Object.keys(data).filter(key=>key!=='page' && key!=='__super').reduce((obj,key)=>{obj[key]=data[key];return obj;},{});let url=new URL('{$exportPath}',window.location.origin);Object.keys(params).forEach(key=>url.searchParams.append(key,params[key]));{$doAction}")
            ),
            // 导出本页
            amis()->VanillaAction()->label(__('admin.export.page'))->onEvent(
                $event("let ids=event.data.items.map(item=>item.{$primaryKey});if(ids.length===0){return doAction({actionType:'toast',args:{msgType:'warning',msg:'{$pageNoData}'}})};let url=new URL('{$exportPath}',window.location.origin);url.searchParams.append('_ids',ids.join(','));{$doAction}")
            ),
        ];
        // 导出选中项
        if (! $disableSelectedItem) {
            $buttons[] = amis()->VanillaAction()->label(__('admin.export.selected_rows'))->onEvent(
                $event("let ids=event.data.selectedItems.map(item=>item.{$primaryKey});if(ids.length===0){return doAction({actionType:'toast',args:{msgType:'warning',msg:'{$selectedNoData}'}})};let url=new URL('{$exportPath}',window.location.origin);url.searchParams.append('_ids',ids.join(','));{$doAction}")
            );
        }

        return amis()->Service()
            ->id('export-action')
            ->set('align', 'right')
            ->set('data', ['showExportLoading' => false])
            ->body(
                amis()->Spinner()->set('showOn', '${showExportLoading}')->overlay()->body(
                    amis()->DropdownButton()
                        ->label(__('admin.export.title'))
                        ->set('icon', 'fa-solid fa-download')
                        ->buttons($buttons)
                        ->closeOnClick()
                        ->align('right')
                )
            );
    }
}
