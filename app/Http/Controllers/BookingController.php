<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Booking;
use Illuminate\Support\Carbon;
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
        $booking = new Booking([
            'id_status' => $request->input('id_status'),
            'check_in' => $request->input('check_in'),
            'check_out' => $request->input('check_out'),
            'total' => $request->input('total')
        ]);
        $booking->save();
        return response()->json(['id' => $booking->id, 'message' => 'Booking created!']);
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
        $booking = Booking::find($id);
        $booking->delete();
        return response()->json('Booking deleted!');
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
            ->where('check_in', '<=', $now)
            ->where('check_out', '>=', $now)
            ->count();

        return response()->json($booking);
    }
}
