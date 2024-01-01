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
        Schema::create('informasi_kamar', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_kategori')->unsigned();
            $table->integer('id_status_kamar')->unsigned();
            $table->foreign('id_kategori')->references('id')->on('kategori_kamar');
            $table->foreign('id_status_kamar')->references('id')->on('status_kamar');
            $table->binary('foto_kamar');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('informasi_kamar');
    }
};
