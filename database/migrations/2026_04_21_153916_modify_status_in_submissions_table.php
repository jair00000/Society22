<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Use raw SQL to alter the table. This bypasses the need for doctrine/dbal.
        DB::statement("ALTER TABLE submissions MODIFY status VARCHAR(255) DEFAULT 'pending' NOT NULL");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Revert to nullable or whatever your previous state was
        DB::statement("ALTER TABLE submissions MODIFY status VARCHAR(255) NOT NULL");
    }
};
