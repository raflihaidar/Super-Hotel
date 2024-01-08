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
        Schema::table('informasi_kamar', function (Blueprint $table) {
            $table->decimal('rating')->nullable()->change();
            $table->binary('foto_kamar')->nullable()->change();
            $table->integer('id_status_kamar')->unsigned()->default(1)->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('informasi_kamar', function (Blueprint $table) {
            $table->dropColumn('id_status_kamar');
            // Jika perlu, tambahkan perubahan kolom rating dan foto_kamar pada saat down
            $table->decimal('rating')->nullable()->change();
            $table->binary('foto_kamar')->nullable()->change();
        });
    }
};

