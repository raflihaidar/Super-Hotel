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

    protected $fillable = [
        'id_kategori',
        'id_status_kamar',
        'foto_kamar'
    ];

    public function toSearchableArray()
    {
        $array = [
            'id' => '',
            'kategori_kamar.kategori' => '',
            'status_kamar.nama' => '',
        ];

        return $array;
    }
}
