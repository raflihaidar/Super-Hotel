<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class statusKamar extends Model
{
    use HasFactory;

    protected $connection = 'mysql';

    protected $table = "status_kamar";

    protected $fillable = [
        'nama',
    ];
}
