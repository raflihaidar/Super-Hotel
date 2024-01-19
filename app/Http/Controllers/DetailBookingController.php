<?php

namespace App\Http\Controllers;

use App\Models\Faktur;
use Illuminate\Http\Request;
use App\Models\DetailBooking;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class DetailBookingController extends Controller
{
    public function index($index)
    {
        $page = $index;
        $detailBooking = DetailBooking::all($page);
        return response()->json($detailBooking);
    }
    public function store(Request $request)
    {
        $detailBooking = new DetailBooking([
            'id_booking' => $request->input('id_booking'),
            'id_tamu' => $request->input('id_tamu'),
            'id_kamar' => $request->input('id_kamar'),
            'jumlah_kamar' => $request->input('jumlah_kamar'),
            'jumlah_tamu' => $request->input('jumlah_tamu'),
            'catatan' => $request->input('tanggal_booking'),
            'subtotal' => $request->input('subtotal'),
        ]);
        $detailBooking->save();
        return response()->json('Detail Booking created!');
    }
    public function show($id_booking)
    {
        $detailBooking = DetailBooking::where('id_booking', $id_booking)->first();
        return response()->json($detailBooking);
    }
   public function update($id_booking, Request $request)
    {
        $detailBooking = DetailBooking::find($id_booking);
        $detailBooking->update($request->all());
        return response()->json('Detail Booking updated!');
    }

    public function updateTotal(Request $request)
    {
        $idBooking = $request->input('id_booking');

        try {
            DB::beginTransaction();
            // Hitung total dari subtotal di tabel detail_booking
            $subtotal = \DB::table('detail_booking')
                ->where('id_booking', $idBooking)
                ->sum('subtotal');

            // Update total di tabel booking
            \DB::table('booking')
                ->where('id', $idBooking)
                ->update(['total' => $subtotal]);

            DB::commit();

            return response()->json(['success' => true]);
        } catch (\Exception $e) {
            DB::rollBack();

            return response()->json(['error' => $e->getMessage()]);
        }
    }
    public function destroy($id_booking)
    {
        $detailBooking = DetailBooking::find($id_booking);
        $detailBooking->delete();
        return response()->json('Detail Booking deleted!');
    }
    public function getBookingHistory($tamuId){
        $bookingDetails = \DB::table('detail_booking')
        ->leftJoin('informasi_kamar', 'informasi_kamar.id', '=', 'detail_booking.id_kamar')
        ->leftJoin('kategori_kamar as k', 'k.id', '=', 'informasi_kamar.id_kategori')
        ->leftJoin('booking as b', 'b.id', '=', 'detail_booking.id_booking')
        ->leftJoin('status_pembayaran as s', 's.id', '=', 'b.id_status')
        ->leftJoin('tamu as t', 't.id', '=', 'detail_booking.id_tamu')
        ->select(
            'k.nama as kategori',
            'k.fasilitas as fasilitas',
            'k.harga as harga',
            'k.foto as foto',
            'b.check_in',
            'b.check_out',
            'b.tanggal_booking',
            'b.total',
            's.nama as status_pembayaran'
        )
        ->where('detail_booking.id_tamu', $tamuId)
        ->where('b.id_status', 1)
        ->get();

        return response()->json(['booking_details' => $bookingDetails]);
    }
}
