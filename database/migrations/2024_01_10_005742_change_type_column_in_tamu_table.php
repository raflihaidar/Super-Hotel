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
        Schema::table('tamu', function (Blueprint $table) {
            $table->string('nik', 20)->nullable()->unique()->change();
            $table->string('alamat', 255)->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tamu', function (Blueprint $table) {
            $table->string('nik', 20)->unique();
            $table->string('alamat', 255);
        });
    }
};
