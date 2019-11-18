<?php

use App\Model\Entity\User;
use Hyperf\Cache\Listener\DeleteListenerEvent;
use Hyperf\Contract\ConfigInterface;
use Hyperf\Utils\ApplicationContext;
use Hyperf\Utils\Context;
use Psr\EventDispatcher\EventDispatcherInterface;

function getClientIp()
{
    return '127.0.0.1';
}


/**
 * @param $key
 * @param mixed ...$param
 */
function CacheClear($key, ...$param)
{
    if (!ApplicationContext::hasContainer()) {
        throw new \RuntimeException('The application context lacks the container.');
    }
    $container = ApplicationContext::getContainer();
    if (!$container->has(EventDispatcherInterface::class)) {
        throw new \RuntimeException('ConfigInterface is missing in container.');
    }
    return $container->get(EventDispatcherInterface::class)->dispatch(new DeleteListenerEvent($key, $param));
}


/**
 * @return User |mixed|null
 */
function getUserInfo()
{
    return Context::get(User::class);
}

function get_client_group()
{
    return getUserInfo()->getGroupId() ?? 0;
}

function is_client_admin()
{

    return true;
}

function get_client_id()
{
    return 1;
}


if (!function_exists('string_to_byte')) {
    /**
     * 字符计量大小转换为字节大小
     * @param string $var 值
     * @param int $dec 小数位数
     * @return int
     */
    function string_to_byte($var, $dec = 2)
    {
        preg_match('/(^[0-9\.]+)(\w+)/', $var, $info);
        $size = $info[1];
        $suffix = mb_strtoupper($info[2], 'utf-8');

        $a = array_flip(['B', 'KB', 'MB', 'GB', 'TB', 'PB']);
        $b = array_flip(['B', 'K', 'M', 'G', 'T', 'P']);

        $pos = array_key_exists($suffix, $a) && $a[$suffix] !== 0 ? $a[$suffix] : $b[$suffix];
        return round($size * pow(1024, $pos), $dec);
    }
}
if (!function_exists('is_empty_parm')) {
    /**
     * 判断是否为空参数
     * @param mixed $parm
     * @return bool
     */
    function is_empty_parm(&$parm)
    {
        return !(isset($parm) && '' !== $parm);
    }
}


function json($data)
{
    $response = [];
    $response['status'] = 200;
    $response['messages'] = 'success';
    $response['data'] = $data;
    return $response;
}

function user_md5($str)
{
    return md5($str);
}

function uuid($length)
{
    if (function_exists('random_bytes')) {
        $uuid = bin2hex(random_bytes($length));
    } else if (function_exists('openssl_random_pseudo_bytes')) {
        $uuid = bin2hex(openssl_random_pseudo_bytes($length));
    } else {
        $pool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $uuid = substr(str_shuffle(str_repeat($pool, 5)), 0, $length);
    }
    return $uuid;
}


function p($val, $title = null, $starttime = '')
{


    print_r('[ ' . date("Y-m-d H:i:s") . ']:');
    if ($title != null) {
        print_r("[" . $title . "]:");
    }
    print_r($val);
    print_r("\r\n");
}


/**
 *
 * @param $arr_str
 * @param string $delimiter
 * @return array
 */
function multi_str2tree($arr_str, $delimiter = '/')
{

    $res = array();

    $format = function ($str, $delimiter) {
        $arr = explode($delimiter, $str);
        $result = null;
        // 弹出最后一个元素
        for ($i = count($arr) - 1; $i >= 0; $i--) {
            if ($result === null) {
                $result = $arr[$i];
            } else {
                $result = array($arr[$i] => $result);
            }
        }
        return $result;
    };

    foreach ($arr_str as $string) {
        $res = array_merge_recursive($res, $format($string, $delimiter));
    }

    return $res;
}

/**
 *
 * @param $list
 * @param string $id
 * @param string $pid
 * @param string $son
 * @return array|mixed
 */
function arr2tree($list, $id = 'id', $pid = 'pid', $son = 'sub')
{
    list($tree, $map) = [[], []];
    foreach ($list as $item) $map[$item[$id]] = $item;
    foreach ($list as $item) if (isset($item[$pid]) && isset($map[$item[$pid]])) {
        $map[$item[$pid]][$son][] = &$map[$item[$id]];
    } else $tree[] = &$map[$item[$id]];
    unset($map);
    return $tree;
}