<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Faktur;

class FakturController extends Controller
{
    public function show($id)
    {
        $faktur = \DB::table('faktur')
                ->leftJoin('booking as b', 'b.id', '=', 'faktur.id_booking')
                ->leftJoin('detail_booking as db', 'db.id_booking', '=', 'b.id')
                ->leftJoin('tamu as t', 't.id', '=', 'db.id_tamu')
                ->leftJoin('informasi_kamar as k', 'k.id', '=', 'db.id_kamar')
                ->leftJoin('kategori_kamar as kt', 'kt.id', '=', 'k.id_kategori')
                ->select(
                    't.nama as nama_tamu',
                    't.alamat',
                    'faktur.kode',
                    'b.tanggal_booking',
                    'b.check_in',
                    'b.check_out',
                    'kt.nama as kategori',
                    'db.subtotal',
                    'b.total'
                )
                ->where('faktur.id_booking', $id)
                ->first();
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
