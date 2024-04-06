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

trait HasCheckActionTrait
{
    /**
     * 是否为列表数据请求
     *
     * @return bool
     */
    public function actionOfGetData()
    {
        return $this->request->query('_action') == 'getData';
    }

    /**
     * 是否为导出数据请求
     *
     * @return bool
     */
    public function actionOfExport()
    {
        return $this->request->query('_action') == 'export';
    }

    /**
     * 是否为快速编辑数据请求
     *
     * @return bool
     */
    public function actionOfQuickEdit()
    {
        return $this->request->query('_action') == 'quickEdit';
    }

    /**
     * 是否为快速编辑数据请求
     *
     * @return bool
     */
    public function actionOfQuickEditItem()
    {
        return $this->request->query('_action') == 'quickEditItem';
    }
}
