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
        Schema::table('detail_booking', function (Blueprint $table) {
            $table->dropForeign(['id_booking']);
            $table->dropForeign(['id_tamu']);
            $table->foreign('id_booking')
                    ->references('id')
                    ->on('booking')
                    ->onUpdate('cascade')
                    ->onDelete('cascade');
            $table->foreign('id_tamu')
                    ->references('id')
                    ->on('tamu')
                    ->onUpdate('cascade')
                    ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('detail_booking', function (Blueprint $table) {
        });
    }
};
