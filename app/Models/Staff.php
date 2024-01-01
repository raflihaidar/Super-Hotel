<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Staff extends Model
{
    use HasFactory;
    use HasUuids;

    protected $connection = 'mysql';

    protected $table = "staff";

    protected $fillable = [
        'id_divisi',
        'id_shift',
        'id_status',
        'nama',
        'email',
        'alamat',
        'foto'
    ];

}
