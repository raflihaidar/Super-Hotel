<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class InformasiKamar extends Model
{
    use HasFactory, Searchable;

    protected $connection = 'mysql';

    protected $table = "informasi_kamar";

    public $timestamps = false;

    protected $fillable = [
        'room_name',
        'id_kategori',
        'id_status_kamar',
        'rating'
    ];

    public function toSearchableArray()
    {
        $array = [
            'room_name' => '',
            'kategori_kamar.kategori' => '',
            'status_kamar.nama' => '',
        ];

        return $array;
    }
}
