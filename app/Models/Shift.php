<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shift extends Model
{
    use HasFactory;

    protected $connection = 'mysql';

    protected $table = "shift";

    public $timestamps = false;

    protected $fillable = [
        'nama',
        'jam_masuk',
        'jam_keluar',
    ];

}
