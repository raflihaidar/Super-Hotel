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
        Schema::create('kategori_kamar', function (Blueprint $table) {
            $table->increments('id');
            $table->string('kategori', 100)->unique();
            $table->string('fasilitas', 150);
            $table->string('deskripsi', 255);
            $table->integer('harga');
            $table->integer('jumlah_kamar');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kategori_kamar');
    }
};
