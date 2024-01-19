<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StatusKamar;

class StatusKamarController extends Controller
{
    public function index()
    {
        $kategori = StatusKamar::All();
        return response()->json($kategori);
    }
}
