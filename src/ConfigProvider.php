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

namespace HPlus\Admin;

/**
 * This file is part of ai-image.
 *
 * @contact  4213509@qq.com
 */
class ConfigProvider
{
    public function __invoke(): array
    {
        return [
            'annotations' => [
                'scan' => [
                    'paths' => [
                        __DIR__ . '/Command',
                        __DIR__ . '/Controller',
                        __DIR__ . '/Service',
                    ],
                ],
            ],
        ];
    }
}
