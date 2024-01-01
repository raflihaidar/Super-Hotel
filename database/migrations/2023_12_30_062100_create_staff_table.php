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
        Schema::create('staff', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_divisi')->unsigned();
            $table->integer('id_shift')->unsigned();
            $table->integer('id_status')->unsigned();
            $table->string('nama', 150)->unique();
            $table->string('email', 150)->unique();
            $table->string('alamat', 255);
            $table->binary('foto');
            $table->foreign('id_divisi')->references('id')->on('divisi');
            $table->foreign('id_shift')->references('id')->on('shift');
            $table->foreign('id_status')->references('id')->on('status_staff');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('staff');
    }
};
