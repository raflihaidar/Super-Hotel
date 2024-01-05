<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Shift extends Model
{
    use HasFactory, Searchable;

    protected $connection = 'mysql';

    protected $table = "shift";

    public $timestamps = false;

    protected $fillable = [
        'nama',
        'jam_masuk',
        'jam_keluar',
    ];

    public function toSearchableArray()
    {
        $array = [
            'id' =>  $this->id,
            'nama' =>  $this->nama,
            'jam_masuk' =>  $this->jam_masuk,
            'jam_keluar' =>  $this->jam_keluar,
        ];

        return $array;
    }

}
