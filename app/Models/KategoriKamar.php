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
        'kategori',
        'fasilitas',
        'deskripsi',
        'harga',
        'jumlah_kamar'
    ];

    public function toSearchableArray()
    {
        $array = [
            'kategori' => $this->kategori,
            'fasilitas' => $this->fasilitas,
        ];

        return $array;
    }
}
