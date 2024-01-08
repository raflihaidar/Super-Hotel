<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KategoriKamar extends Model
{
    use HasFactory;

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
}