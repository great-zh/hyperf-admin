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

namespace HPlus\Admin\Command;

use HPlus\Admin\Model\AdminUser;
use HPlus\Admin\Support\Core\Database;
use Hyperf\Command\Annotation\Command;
use Hyperf\Command\Command as HyperfCommand;
use Psr\Container\ContainerInterface;
use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;

use function Hyperf\Config\config;

#[Command]
class AdminInstall extends HyperfCommand
{
    public function __construct(protected ContainerInterface $container)
    {
        parent::__construct('admin:install');
    }

    public function configure(): void
    {
        parent::configure();
        $this->setDescription('安装Admin后台');
    }

    public function handle()
    {
        $this->call('migrate', ['--path' => BASE_PATH . '/vendor/hyperf-plus/admin/migrations/database', '--realpath' => true]);
        if (config('admin.models.admin_user', AdminUser::class)::query()->count() == 0) {
            Database::make()->fillInitialData();
        }
        $this->info('success');
    }

    private function publishAssets()
    {
        $source = __DIR__ . '/../../admin-views/dist/';
        $target = BASE_PATH . '/public/admin';

        $this->copyDirectory($source, $target);
    }

    private function copyDirectory(string $source, string $target)
    {
        if (! is_dir($source)) {
            return;
        }

        if (! is_dir($target)) {
            mkdir($target, 0755, true);
        }

        # 复制目录

        $iterator = new RecursiveIteratorIterator(
            new RecursiveDirectoryIterator($source, RecursiveDirectoryIterator::SKIP_DOTS),
            RecursiveIteratorIterator::SELF_FIRST
        );

        foreach ($iterator as $item) {
            if ($item->isDir()) {
                $dirPath = $target . DIRECTORY_SEPARATOR . $iterator->getSubPathName();
                if (! is_dir($dirPath)) {
                    mkdir($dirPath);
                }
            } else {
                copy($item->getPathname(), $target . DIRECTORY_SEPARATOR . $iterator->getSubPathName());
            }
        }
    }
}
