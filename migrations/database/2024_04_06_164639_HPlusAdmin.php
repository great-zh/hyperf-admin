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
use HPlus\Admin\Support\Core\Database;
use Hyperf\Database\Migrations\Migration;

class HPlusAdmin extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Database::make()->up();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Database::make()->down();
    }
}
