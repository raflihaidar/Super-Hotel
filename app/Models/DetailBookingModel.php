<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetailBookingModel extends Model
{
    use HasFactory;

    protected $connection = 'mysql';

    protected $table = "detail_booking";

    protected $fillable = [
        'id_booking',
        'id_tamu',
        'id_kamar',
        'jumlah_tamu',
        'catatan',
        'subtotal',
    ];
}
