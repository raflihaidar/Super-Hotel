<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Faktur extends Model
{
    use HasFactory, HasUuids;

    protected $connection = 'mysql';

    protected $primaryKey = 'kode';

    protected $table = "faktur";

    public $timestamps = false;

    protected $fillable = [
        'id_booking'
    ];
}
