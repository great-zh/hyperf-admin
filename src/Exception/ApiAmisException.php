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

namespace HPlus\Admin\Exception;

use Exception;

class ApiAmisException extends Exception
{
    public function __construct($message, int $code = 0, bool $doNotDisplayToast = false)
    {
        if (is_array($message)) {
            $message = json_encode($message);
        }
        $this->message = $message;
        $this->code = $code;
    }
}
