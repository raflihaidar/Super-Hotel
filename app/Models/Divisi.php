<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
class Divisi extends Model
{
    use HasFactory, Searchable;

    protected $connection = 'mysql';

    protected $table = "divisi";

    public $timestamps = false;

    protected $fillable = [
        'nama',
    ];

    public function toSearchableArray()
    {
        $array = [
            'id' =>  $this->id,
            'nama' =>  $this->nama,
        ];

        return $array;
    }

}
