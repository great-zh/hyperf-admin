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

namespace HPlus\Admin\Service;

use HPlus\Admin\Model\AdminApi;
use HPlus\Admin\Model\AdminCodeGenerator;
use Hyperf\Database\Query\Builder;

/**
 * @method AdminApi getModel()
 * @method AdminApi|Builder query()
 */
class AdminApiService extends AdminBaseService
{
    protected ?string $modelName = AdminApi::class;

    public function saving(&$data, $primaryKey = '')
    {
        $exists = $this->query()
            ->where('path', $data['path'])
            ->when($primaryKey, fn ($q) => $q->where('id', '<>', $primaryKey))
            ->exists();

        $routes = AdminCodeGenerator::query()->get()->map(function ($item) {
            return $item->menu_info['enabled'] ? ltrim($item->menu_info['route'], '/') : '';
        })->filter()->toArray();

        admin_abort_if($exists || in_array(ltrim($data['path'], '/'), $routes), __('admin.apis.path_exists'));
    }

    public function saved($model, $isEdit = false)
    {
        RouteGenerator::refresh();
    }

    public function deleted($ids)
    {
        RouteGenerator::refresh();
    }

    public function getApiByPath($path)
    {
        $api = $this->query()->where('path', $path)->first();

        if (! $api && str_starts_with($path, '/')) {
            $api = $this->query()->where('path', ltrim($path, '/'))->first();
        }

        return $api;
    }

    public function getApiByTemplate($template)
    {
        return $this->query()->where('template', $template)->first();
    }
}
