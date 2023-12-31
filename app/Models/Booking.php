<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory, HasUuids;

    protected $connection = 'mysql';

    protected $table = "booking";

    protected $fillable = [
        'id_status',
        'id_jenis_pembayaran',
        'check_in',
        'check_out',
        'jumlah_kamar',
        'tanggal_booking',
        'total',
    ];
}
