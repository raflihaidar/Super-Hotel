<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ImageStoreRequest;
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
        ->paginate($page);
        return response()->json($kamar);
    }
    public function store(Request $request)
    {
        $kamar = new InformasiKamar([
            'room_name' => $request->input('room_name'),
            'id_kategori' => $request->input('id_kategori'),
            'id_status_kamar' => $request->input('id_status_kamar'),
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
         $kamar ->delete();
        return response()->json('Shift deleted!');
    }
    public function search(Request $request)
    {
        $kamar = InformasiKamar::search(trim($request->get('query')) ?? '')
            ->query(function ($query) {
                $query->join('kategori_kamar', 'informasi_kamar.id_kategori', 'kategori_kamar.id')
                    ->join('status_kamar', 'informasi_kamar.id_status_kamar', 'status_kamar.id')
                    ->select('informasi_kamar.*',
                            'kategori_kamar.kategori as kategori',
                            'kategori_kamar.harga as harga',
                            'kategori_kamar.fasilitas as fasilitas',
                            'kategori_kamar.deskripsi as deskripsi',
                            'status_kamar.nama as status as status'
                            )
                    ->orderBy('informasi_kamar.id', 'DESC');
            })
            ->get();
        return response()->json(data: $kamar, status: 200);
    }

    public function checkAvailability(Request $request)
    {
        $checkIn = $request->input('checkin');
        $checkOut = $request->input('checkout');

        $distinctCategories = \DB::table('informasi_kamar')
        ->join('kategori_kamar', 'kategori_kamar.id', '=', 'informasi_kamar.id_kategori')
        ->where('informasi_kamar.id_status_kamar', 1)
        ->whereNotIn('informasi_kamar.id', function ($query) use ($checkIn, $checkOut) {
            $query->select('id_kamar')
                ->from('detail_booking')
                ->join('booking', 'booking.id', '=', 'detail_booking.id_booking')
                ->where(function ($query) use ($checkIn, $checkOut) {
                    $query->whereBetween('booking.check_in', [$checkIn, $checkOut])
                        ->orWhereBetween('booking.check_out', [$checkIn, $checkOut]);
                });
        })
        ->select('kategori_kamar.*')
        ->distinct()
        ->get();

        return response()->json(['categories' => $distinctCategories], 200);
    }
    public function getRoomId(Request $request)
    {
        $idKategori = $request->input('id_kategori');

        $idKamar = \DB::table('informasi_kamar')
            ->select('id')
            ->where('id_status_kamar', 1)
            ->where('id_kategori', $idKategori)
            ->orderBy('id', 'asc')
            ->limit(1)
            ->value('id');

        if ($idKamar) {
            \DB::table('informasi_kamar')
                ->where('id', $idKamar)
                ->update(['id_status_kamar' => 2]);
        }

        return response()->json(['id_kamar' => $idKamar]);
    }
    public function getCount()
    {
        $kamar = InformasiKamar::count();
        return response()->json($kamar);
    }
    public function getAvailableCount()
    {
        $kamar = \DB::table('informasi_kamar')
                ->where('id_status_kamar', '=', 1)
                ->count();
        return response()->json($kamar);
    }
    public function getUnavailableCount()
    {
        $kamar = \DB::table('informasi_kamar')
                ->where('id_status_kamar', '=', 2)
                ->count();
        return response()->json($kamar);
    }
}
