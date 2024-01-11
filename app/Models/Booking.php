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

    public $timestamps = false;

    protected $fillable = [
        'id_status',
        'check_in',
        'check_out',
        'tanggal_booking',
        'total',
    ];
}
