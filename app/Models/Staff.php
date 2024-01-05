<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Laravel\Scout\Searchable;
use Illuminate\Database\Eloquent\Model;

class Staff extends Model
{
    use HasFactory, HasUuids, Searchable;

    protected $connection = 'mysql';

    protected $table = "staff";

    public $timestamps = false;

    protected $fillable = [
        'id_divisi',
        'id_shift',
        'id_status',
        'nama',
        'email',
        'alamat',
        'foto'
    ];

    public function toSearchableArray()
    {
        $array = [
            'id' => '',
            'nama' => '',
            'divisi.nama' => '',
            'shift.nama' => '',
        ];

        return $array;
    }

}
