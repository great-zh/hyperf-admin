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
use HPlus\Admin\Exception\ApiAmisException;
use HPlus\Admin\Service\AdminBaseService;
use HPlus\Admin\Traits\HasCheckActionTrait;
use HPlus\Admin\Traits\HasElementTrait;
use HPlus\Admin\Traits\HasQueryPathTrait;
use HPlus\Admin\Traits\HasUploadTrait;
use HPlus\Route\Annotation\DeleteApi;
use HPlus\Route\Annotation\GetApi;
use HPlus\Route\Annotation\Path;
use HPlus\Route\Annotation\PostApi;
use HPlus\Route\Annotation\PutApi;
use Hyperf\Di\Annotation\Inject;
use Hyperf\HttpServer\Contract\RequestInterface;
use Hyperf\HttpServer\Contract\ResponseInterface;
use Hyperf\Stringable\Str;
use Psr\Container\ContainerInterface;

use function Hyperf\Support\make;
use function Hyperf\Translation\__;

abstract class AbstractAdminController
{
    use HasElementTrait;
    use HasCheckActionTrait;
    use HasQueryPathTrait;
    use HasUploadTrait;

    #[Inject]
    protected ContainerInterface $container;

    #[Inject]
    protected RequestInterface $request;

    #[Inject]
    protected ResponseInterface $response;

    protected AdminBaseService $service;

    /** @var string 路径 */
    protected string $queryPath;

    /** @var mixed|string 路由前缀 */
    protected string $adminPrefix;

    /** @var bool 是否是新增页面, 页面模式时生效 */
    protected bool $isCreate = false;

    /** @var bool 是否是编辑页面, 页面模式时生效 */
    protected bool $isEdit = false;

    public function __construct()
    {
        $handledNamespace = Str::replaceFirst('Controller', '', Str::after(static::class, '\\Controller\\'));
        $handledNamespace = str_replace('\\', '/', $handledNamespace);
        $prefix = Str::snake($handledNamespace);
        if (property_exists($this, 'serviceName')) {
            $this->service = make($this->serviceName);
        } else {
            $this->service = $this->defaultService($prefix);
        }
        $prefix = str_replace('/_', '/', $prefix);
        $this->queryPath = $prefix;
    }

    /**
     * 获取当前登录用户.
     */
    public function user()
    {
        return Admin::user();
    }

    public function getPrimaryValue($request): mixed
    {
        $primaryKey = $this->service->primaryKey();

        return $request->{$primaryKey};
    }

    /**
     * 获取新增页面.
     */
    #[GetApi(summary: '列表')]
    #[PostApi(summary: '创建数据')]
    public function _self_path()
    {

        if ($this->request->getMethod() == 'POST') {
            return $this->store();
        }

        if ($this->actionOfGetData()) {
            return $this->service->list($this->request->all());
        }

        if ($this->actionOfExport()) {
            return $this->export();
        }

        return $this->grid();
    }

    /**
     * 获取新增页面.
     */
    #[GetApi(summary: '创建数据')]
    public function create()
    {
        $this->isCreate = true;
        $form = amis()->Card()
            ->className('base-form')
            ->header(['title' => __('admin.create')])
            ->toolbar([$this->backButton()])
            ->body($this->form(false)->api($this->getStorePath()));

        return $this->basePage()->body($form);
    }

    public function store()
    {
        $response = fn ($result) => $this->autoResponse($result, __('admin.save'));

        if ($this->actionOfQuickEdit()) {
            return $response($this->service->quickEdit($this->request->all()));
        }

        if ($this->actionOfQuickEditItem()) {
            return $response($this->service->quickEditItem($this->request->all()));
        }
        return $response($this->service->store($this->request->all()));
    }

    #[GetApi(summary: '获取单条数据', path: '{id:\\d+}')]
    #[Path(name: '主键id', key: 'id')]
    public function edit($id)
    {
        $this->isEdit = true;

        if ($this->actionOfGetData()) {
            return $this->service->getEditData($id);
        }

        $form = amis()->Card()
            ->className('base-form')
            ->header(['title' => __('admin.edit')])
            ->toolbar([$this->backButton()])
            ->body(
                $this->form(true)->api($this->getUpdatePath())->initApi($this->getEditGetDataPath())
            );

        return $this->basePage()->body($form);
    }

    #[PutApi(summary: '保存单条数据', path: '{id:\\d+}')]
    #[Path(key: 'id', name: '主键id')]
    public function put($id)
    {
        $data = $this->request->all();
        if (empty($id)) {
            throw new ApiAmisException('缺少更新条件，请先选择数据！');
        }
        $result = $this->service->update($id, $data);
        return $this->autoResponse($result, __('admin.save'));
    }

    #[DeleteApi(summary: '删除数据', path: '{ids}')]
    public function destroy($ids)
    {
        $rows = $this->service->delete($ids);
        return $this->autoResponse($rows, __('admin.delete'));
    }

    /**
     * 根据传入的条件, 返回消息响应.
     * @param mixed $flag
     * @param mixed $text
     */
    protected function autoResponse($flag, $text = '')
    {
        if (! $text) {
            $text = __('admin.actions');
        }

        if ($flag) {
            return Admin::responseData([], $text . __('admin.successfully'));
        }

        return Admin::responseError($this->service->getError() ?? $text . __('admin.failed'));
    }

    private function defaultService(string $prefix)
    {
        # todo 根据路由自动挂载service
        $service = new class() extends AdminBaseService {
        };
        $service->setModelName($prefix);
        return $service;
    }
}
