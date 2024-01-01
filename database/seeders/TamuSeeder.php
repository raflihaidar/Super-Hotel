<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;


class TamuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

    public function run(): void
    {
        DB::table('tamu')->insert([
            'nik' => rand(1, 20),
            'nama' => Str::random(20),
            'username' => Str::random(20),
            'telephone' => Str::random(20),
            'email' => Str::random(20),
            'alamat' => Str::random(20),
            'password' => Hash::make('password'),
        ]);
    }
}
