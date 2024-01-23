<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Booking;
use App\Models\Faktur;
use App\Models\DetailBooking;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Barryvdh\DomPDF\Facade\Pdf;
class BookingController extends Controller
{
    public function index($index)
    {
        $page = $index;
        $booking = Booking::paginate($page);
        return response()->json($booking);
    }
    public function store(Request $request)
    {
        DB::beginTransaction();
        try {

            $booking = new Booking([
                'id_status' => $request->input('id_status'),
                'check_in' => $request->input('check_in'),
                'check_out' => $request->input('check_out'),
                'total' => $request->input('total')
            ]);
            $booking->save();

            $faktur = new Faktur([
                'id_booking' => $booking->id
            ]);
            $faktur->save();

            $detalBooking = new DetailBooking([
                'id_booking' =>  $booking->id,
                'id_tamu' => $request->input('id_tamu'),
                'id_kamar' => $request->input('id_kamar'),
                'jumlah_kamar' => $request->input('jumlah_kamar'),
                'jumlah_tamu' => $request->input('jumlah_tamu'),
                'catatan' => $request->input('tanggal_booking'),
                'subtotal' => $request->input('subtotal'),
            ]);
            $detalBooking->save();

            $subtotal = \DB::table('detail_booking')
                ->where('id_booking', $booking->id)
                ->sum('subtotal');

            // Update total di tabel booking
            \DB::table('booking')
                ->where('id', $booking->id)
                ->update(['total' => $subtotal]);

            DB::commit();

            return response()->json(['message' => 'Booking created!']);
        } catch (\Exception $e) {
            DB::rollBack();

            return response()->json(['error' => $e->getMessage()]);
        }
    }

    public function show($id)
    {
        $booking = Booking::where('id', $id)->first();
        return response()->json($booking);
    }
   public function update($id, Request $request)
    {
        $booking = Booking::find($id);
        $booking->update($request->all());
        return response()->json('Booking updated!');
    }
    public function destroy($id)
    {
        DB::beginTransaction();
        try {

            DB::table('informasi_kamar')
            ->whereIn('id', function ($query) use ($id) {
                $query->select('id_kamar')
                      ->from('detail_booking')
                      ->where('id_booking', $id);
            })
            ->update(['id_status_kamar' => 1]);

            $booking = Booking::find($id);
            $booking->delete();

            DB::commit();

            return response()->json(['success' => true]);
        } catch (\Exception $e) {
            DB::rollBack();

            return response()->json(['error' => $e->getMessage()]);
        }
    }
    public function destroyAllData(){
        \DB::table('booking')->delete();
        return response()->json('All Booking deleted!');
    }
    public function getCount()
    {
        $booking = Booking::count();
        return response()->json($booking);
    }
    public function getCheckInCount()
    {
        $now = Carbon::now('Asia/Jakarta')->format('Y-m-d');
        $booking = \DB::table('booking')->where('check_in', '=', $now)->count();
        return response()->json($booking);
    }
    public function getCheckOutCount()
    {
        $now = Carbon::now('Asia/Jakarta')->format('Y-m-d');
        $booking = \DB::table('booking')->where('check_out', '=', $now)->count();
        return response()->json($booking);
    }
    public function getStayCount()
    {
        $now = Carbon::now('Asia/Jakarta')->format('Y-m-d');
        $booking = \DB::table('booking')
            ->where('check_in', '<', $now)
            ->where('check_out', '>', $now)
            ->count();

        return response()->json($booking);
    }
}
