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
        Schema::create('tamu', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nik', 20)->unique();
            $table->string('nama', 255)->unique();
            $table->string('username', 150)->unique();
            $table->string('password', 180);
            $table->string('telephone', 35)->unique();
            $table->string('email', 100)->unique();
            $table->string('alamat', 255);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tamu');
    }
};
