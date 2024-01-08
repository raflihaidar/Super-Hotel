<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ImageStoreRequest;
use App\Models\InformasiKamar;
use Symfony\Component\HttpFoundation\Response;
use File;

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
    public function store(ImageStoreRequest $request)
    {
        $validatedData = $request->validated();
        $validatedData['image'] = $request->file('image')->store('image', 'public');
        $kamar = new InformasiKamar([
            'room_name' => $request->input('room_name'),
            'id_kategori' => $request->input('id_kategori'),
            'id_status_kamar' => $request->input('id_status_kamar'),
            'foto_kamar' => $validatedData['image']
        ]);
        $kamar->save();
        return response()->json([
            'success' => true,
            'message' => 'Room added successfully',
            'data' => $kamar,
        ]);
    }
    public function show($id)
    {
        $kamar =\DB::table("informasi_kamar")
        ->join('kategori_kamar', 'informasi_kamar.id_kategori', 'kategori_kamar.id')
        ->join('status_kamar', 'informasi_kamar.id_status_kamar', 'status_kamar.id')
        ->select('informasi_kamar.*',
                'kategori_kamar.kategori as kategori',
                'kategori_kamar.harga as harga',
                'kategori_kamar.fasilitas as fasilitas',
                'kategori_kamar.deskripsi as deskripsi',
                'status_kamar.nama as status as status'
                )
        ->where('informasi_kamar.id', $id)
        ->first();
        return response()->json($kamar);
    }
    public function update(Request $request, $id)
    {
        $kamar = InformasiKamar::find($id);
        $kamar ->update($request->all());
        return response()->json('Room updated!');
    }


    public function destroy($id)
    {
         $kamar  =InformasiKamar::find($id);
         $imagepath = \public_path('/storage/'.$kamar->foto_kamar);
         if(File::exists($imagepath)){
             File::delete($imagepath);
         }
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
