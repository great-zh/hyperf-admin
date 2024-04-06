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

use ArrayAccess;
use Exception;
use HPlus\Admin\Model\AdminSetting;
use Hyperf\Collection\Arr;
use Hyperf\DbConnection\Db;
use Slowlyo\OwlAdmin\Admin;

use function Hyperf\Translation\__;

class AdminSettingService extends AdminBaseService
{
    protected ?string $modelName = AdminSetting::class;

    protected string $cacheKeyPrefix = 'app_setting_';

    /**
     * 保存设置.
     *
     * @param mixed $key
     * @param null|mixed $value
     * @return bool
     */
    public function set($key, $value = null)
    {
        $setting = $this->query()->firstOrNew(['key' => $key]);
        $setting->values = $value;
        $this->clearCache($key);
        $setting->save();
        return true;
    }

    /**
     * 批量保存设置.
     *
     * @return bool
     */
    public function setMany(array $data)
    {
        Db::beginTransaction();
        try {
            foreach ($data as $key => $value) {
                $this->set($key, $value);
            }
            Db::commit();
        } catch (Exception $e) {
            Db::rollBack();
            throw new $e();
        }

        return true;
    }

    /**
     * 批量保存设置项并返回后台响应格式数据.
     *
     * @throws Exception
     */
    public function adminSetMany(array $data)
    {
        $prefix = __('admin.save');
        $this->setMany($data);
        return Admin::response()->successMessage($prefix . __('admin.successfully'));
    }

    /**
     * 以数组形式返回所有设置.
     *
     * @return array
     */
    public function all()
    {
        return $this->query()->pluck('values', 'key')->toArray();
    }

    /**
     * 获取设置项.
     *
     * @param string $key 设置项key
     * @param null|mixed $default 默认值
     * @param bool $fresh 是否直接从数据库获取
     *
     * @return null|mixed
     */
    public function get(string $key, mixed $default = null, bool $fresh = false)
    {
        if ($fresh) {
            return $this->query()->where('key', $key)->value('values') ?? $default;
        }

        $value = cache_has_set($this->getCacheKey($key), function () use ($key) {
            return $this->query()->where('key', $key)->value('values');
        });

        return $value ?? $default;
    }

    /**
     * 获取设置项中的某个值
     *
     * @param string $key 设置项key
     * @param string $path 通过点号分隔的路径, 同Arr::get()
     * @param null|mixed $default
     *
     * @return null|array|ArrayAccess|mixed
     */
    public function arrayGet(string $key, string $path, $default = null)
    {
        $value = $this->get($key);

        if (is_array($value)) {
            return Arr::get($value, $path, $default);
        }

        return $default;
    }

    /**
     * 清除指定设置项.
     *
     * @return bool
     */
    public function del(string $key)
    {
        if ($this->query()->where('key', $key)->delete()) {
            $this->clearCache($key);

            return true;
        }

        return false;
    }

    /**
     * 清除指定设置项的缓存.
     * @param mixed $key
     */
    public function clearCache($key)
    {
        cache()->delete($this->getCacheKey($key));
    }

    public function getCacheKey($key)
    {
        return $this->cacheKeyPrefix . $key;
    }
}
