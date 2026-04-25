<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        // This command ensures that any existing or new row gets 'pending' 
        // if no status is provided, satisfying the NOT NULL constraint.
        DB::statement("ALTER TABLE submissions MODIFY status VARCHAR(255) DEFAULT 'pending' NOT NULL");
    }

    public function down(): void
    {
        DB::statement("ALTER TABLE submissions MODIFY status VARCHAR(255) NOT NULL");
    }
};
