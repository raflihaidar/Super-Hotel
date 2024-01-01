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
        Schema::create('detail_booking', function (Blueprint $table) {
            $table->integer('id_booking')->unsigned();
            $table->integer('id_tamu')->unsigned();
            $table->integer('id_kamar')->unsigned();
            $table->integer('jumlah_tamu');
            $table->string('catatan', 255);
            $table->integer('subtotal');
            $table->foreign('id_booking')->references('id')->on('booking');
            $table->foreign('id_tamu')->references('id')->on('tamu');
            $table->foreign('id_kamar')->references('id')->on('informasi_kamar');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detail_booking');
    }
};
