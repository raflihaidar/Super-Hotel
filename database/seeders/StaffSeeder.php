<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Staff;

class StaffSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \DB::table('staff')->insert([
            'id' => rand(1, 20),
            'id_divisi' => 1,
            'id_shift' => 2,
            'id_status' => 1,
            'nama' => 'atok',
            'email' => 'atok@gmail.com',
            'alamat' => 'jember',
        ]);
    }
}
