<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\InformasiKamar;

class InfoKamarController extends Controller
{
    public function index($index)
    {
        $page = $index;
        $kamar = \DB::table("informasi_kamar")
        ->join('kategori_kamar', 'informasi_kamar.id_kategori', 'kategori_kamar.id')
        ->join('status_kamar', 'informasi_kamar.id_status_kamar', 'status_kamar.id')
        ->select('informasi_kamar.*',
                'kategori_kamar.kategori as kategori',
                'kategori_kamar.harga as harga',
                'kategori_kamar.fasilitas as fasilitas',
                'kategori_kamar.deskripsi as deskripsi',
                'status_kamar.nama as status as status'
                )
        ->simplePaginate($page);
        return response()->json($kamar);
    }
    public function store(Request $request)
    {
        $kamar = new InformasiKamar([
            'id_kategori' => $request->input('nama'),
            'id_status_kamar' => $request->input('id_status_kamar'),
            'foto_kamar' => $request->input('foto_kamar'),
        ]);
        $kamar->save();
        return response()->json('Shift created!');
    }
    public function show($id)
    {
        $kamar =InformasiKamar::find($id);
        return response()->json($kamar);
    }
   public function update($id, Request $request)
    {
         $kamar  =InformasiKamar::find($id);
         $kamar ->update($request->all());
         return response()->json('Shift updated!');
    }
    public function destroy($id)
    {
         $kamar  =InformasiKamar::find($id);
         $kamar ->delete();
        return response()->json('Shift deleted!');
    }

    public function search(Request $request)
    {
        $kamar = InformasiKamar::search(trim($request->get('query')) ?? '')
            ->query(function ($query) {
                $query->join('kategori_kamar', 'informasi_kamar.id_kategori', 'kategori_kamar.id')
                    ->join('status_kamar', 'informasi_kamar.id_status_kamar', 'status_kamar.id')
                    ->select('informasi_kamar.*', 'kategori_kamar.kategori as kategori', 'status_kamar.nama as status')
                    ->orderBy('informasi_kamar.id', 'DESC');
            })
            ->get();

        return response()->json(data: $kamar, status: 200);
    }
}
