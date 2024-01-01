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
        Schema::create('faktur', function (Blueprint $table) {
            $table->increments('kode');
            $table->integer('id_staff')->unsigned();
            $table->integer('id_booking')->unsigned();
            $table->integer('jumlah_bayar');
            $table->integer('kembali');
            $table->integer('ppn');
            $table->date('tanggal_transaksi');
            $table->integer('diskon');

            $table->foreign('id_booking')->references('id')->on('booking');
            $table->foreign('id_staff')->references('id')->on('staff');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('faktur');
    }
};
