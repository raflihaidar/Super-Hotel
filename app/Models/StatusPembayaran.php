<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StatusPembayaran extends Model
{
    use HasFactory;

    protected $connection = 'mysql';

    protected $table = "status_pembayaran";

    protected $fillable = [
        'nama',
    ];
}
