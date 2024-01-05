<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JenisPembayaranModel extends Model
{
    use HasFactory;

    protected $connection = 'mysql';

    protected $table = "jenis_pembayaran";

    protected $fillable = [
        'jenis'
    ];
}
