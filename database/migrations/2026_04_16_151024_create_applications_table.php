<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('applications', function (Blueprint $table) {
            $table->id();

            // Basic Info
            $table->string('full_name');
            $table->string('email');
            $table->string('phone')->nullable();

            // Event / Application
            $table->string('event_name')->nullable();
            $table->text('message')->nullable();

            // Status System
            $table->enum('status', ['pending', 'approved', 'rejected'])->default('pending');

            // Approval Tracking
            $table->timestamp('approved_at')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('applications');
    }
};
