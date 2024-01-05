<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KategoriSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \DB::table('kategori_kamar')->insert([
            'id' => 1,
            'kategori' => 'Standard Room',
            'fasilitas' => 'ac',
            'deskripsi' => 'Kamar standar',
            'harga' => 200000,
            'jumlah_kamar' => 20
        ]);
    }
}
