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
        Schema::create('booking', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_status')->unsigned();
            $table->integer('id_jenis_pembayaran')->unsigned();
            $table->date('check_in');
            $table->date('check_out');
            $table->integer('jumlah_kamar');
            $table->date('tanggal_booking');
            $table->integer('total');
            $table->foreign('id_status')->references('id')->on('status_pembayaran');
            $table->foreign('id_jenis_pembayaran')->references('id')->on('jenis_pembayaran');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('booking');
    }
};
