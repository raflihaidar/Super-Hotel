<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KamarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \DB::table('informasi_kamar')->insert([
            'id' => rand(1, 20),
            'id_kategori' => 1,
            'id_status_kamar' => 1,
            'foto_kamar' => 'ksdaskd'
        ]);
    }
}
