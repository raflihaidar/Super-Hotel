<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetailBooking extends Model
{
    use HasFactory;

    protected $connection = 'mysql';

    protected $table = "detail_booking";

    public $timestamps = false;

    protected $fillable = [
        'id_booking',
        'id_tamu',
        'id_kamar',
        'jumlah_kamar',
        'jumlah_tamu',
        'catatan',
        'subtotal',
    ];
}
