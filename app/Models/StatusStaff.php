<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StatusStaff extends Model
{
    use HasFactory;

    protected $connection = 'mysql';

    protected $table = "status_staff";

    protected $fillable = [
        'nama',
    ];
}
