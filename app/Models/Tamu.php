<?php

namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use App\Traits\HasUUID;
use Laravel\Scout\Searchable;

class Tamu extends Authenticatable
{
    use HasFactory, HasUUID, HasApiTokens, Searchable;

    protected $connection = 'mysql';

    protected $table = "tamu";

    protected $fillable = [
        'nik',
        'nama',
        'username',
        'password',
        'telephone',
        'email',
        'alamat'
    ];

    protected $hidden = [
        'password'
    ];

    public function toSearchableArray()
    {
        $array = [
            'nik' => $this->nik,
            'nama' => $this->nama,
            'username' => $this->username,
            'email' => $this->email
        ];

        return $array;
    }
}
