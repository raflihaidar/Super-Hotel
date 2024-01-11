<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Faktur;

class FakturController extends Controller
{
    public function show($id)
    {
        $faktur = Faktur::where('id_booking', $id)->first();
        return response()->json($faktur);
    }
    public function store(Request $request)
    {
        $faktur = new Faktur([
            'kode' => $request->input('kode'),
            'id_booking' => $request->input('id_booking'),
            'jumlah_bayar' => $request->input('jumlah_bayar'),
            'tanggal_transaksi' => $request->input('tanggal_transaksi')
        ]);
        $faktur->save();
        return response()->json(['kode' => $faktur->kode, 'message' => 'Faktur created!']);
    }
}
