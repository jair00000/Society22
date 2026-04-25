<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('submissions', function (Blueprint $table) {
            // Check if column exists before adding to avoid "Duplicate column" errors
            if (!Schema::hasColumn('submissions', 'type')) {
                $table->string('type')->after('id');
            }
            if (!Schema::hasColumn('submissions', 'name')) {
                $table->string('name')->after('type');
            }
            if (!Schema::hasColumn('submissions', 'email')) {
                $table->string('email')->after('name');
            }
            if (!Schema::hasColumn('submissions', 'status')) {
                $table->string('status')->default('pending')->after('email');
            }
            if (!Schema::hasColumn('submissions', 'phone')) {
                $table->string('phone')->nullable()->after('status');
            }
            if (!Schema::hasColumn('submissions', 'organization')) {
                $table->string('organization')->nullable()->after('phone');
            }
            if (!Schema::hasColumn('submissions', 'message')) {
                $table->text('message')->nullable()->after('organization');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('submissions', function (Blueprint $table) {
            $table->dropColumn(['type', 'name', 'email', 'phone', 'organization', 'message', 'status']);
        });
    }
};
