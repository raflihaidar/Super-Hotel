<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Faktur extends Model
{
    use HasFactory, HasUuids;

    protected $connection = 'mysql';

    protected $table = "faktur";

    protected $fillable = [
        'id_staff',
        'id_booking',
        'jumlah_bayar',
        'kembali',
        'ppn',
        'tanggal_transaksi',
        'diskon'
    ];
}
