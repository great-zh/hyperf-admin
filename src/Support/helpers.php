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
use HPlus\Admin\Exception\ApiAmisException;

function admin_user()
{
}

if (! function_exists('array2tree')) {
    /**
     * 生成树状数据.
     *
     * @return array
     */
    function array2tree(array $list, int $parentId = 0)
    {
        $data = [];
        foreach ($list as $key => $item) {
            if ($item['parent_id'] == $parentId) {
                $children = array2tree($list, (int) $item['id']);
                ! empty($children) && $item['children'] = $children;
                $data[] = $item;
                unset($list[$key]);
            }
        }
        return $data;
    }
}

if (! function_exists('admin_abort_if')) {
    /**
     * 生成树状数据.
     *
     * @param mixed $error
     *
     * @return array
     */
    function admin_abort_if($error, string $message = '')
    {
        if ($error) {
            throw new ApiAmisException($message);
        }
    }
}

if (! function_exists('amis_abort_if')) {
    /**
     * 生成树状数据.
     *
     * @param mixed $error
     *
     * @return array
     */
    function amis_abort_if($error, string $message = '')
    {
        if ($error) {
            throw new ApiAmisException($message);
        }
    }
}
