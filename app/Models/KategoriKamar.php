<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laravel\Scout\Searchable;
use Illuminate\Database\Eloquent\Model;

class KategoriKamar extends Model
{
    use HasFactory, Searchable;

    protected $connection = 'mysql';

    protected $table = "kategori_kamar";

    public $timestamps = false;

    protected $fillable = [
        'nama',
        'fasilitas',
        'deskripsi',
        'harga',
        'jumlah_kamar',
        'foto'
    ];

    public function toSearchableArray()
    {
        $array = [
            'nama' => $this->kategori,
            'fasilitas' => $this->fasilitas,
        ];

        return $array;
    }
}
