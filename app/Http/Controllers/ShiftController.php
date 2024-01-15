<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Shift;

class ShiftController extends Controller
{
    public function index($index)
    {
        $page = $index;
        $shift = Shift::paginate($page);
        return response()->json($shift);
    }
    public function store(Request $request)
    {
        $shift = new Shift([
            'nama' => $request->input('nama'),
            'jam_masuk' => $request->input('jam_masuk'),
            'jam_keluar' => $request->input('jam_keluar'),
        ]);
        $shift->save();
        return response()->json([
            'success' => true,
            'message' => 'Shift added successfully',
            'data' => $shift,
        ]);
    }
    public function show($id)
    {
        $shift = Shift::find($id);
        return response()->json($shift);
    }
   public function update($id, Request $request)
    {
         $shift  = Shift::find($id);
         $shift ->update($request->all());
         return response()->json('Shift updated!');
    }
    public function destroy($id)
    {
         $shift  = Shift::find($id);
         $shift ->delete();
        return response()->json('Shift deleted!');
    }
    public function destroyAllData(){
        \DB::table('shift')->delete();
        return response()->json('All Shift deleted!');
    }
    public function search(Request $request){
        $search_query = Shift::query();
        $search_param = $request->query('query');

        if($search_param) {
            $search_query = Shift::search( $search_param);
        }

        $tamu = $search_query->get();
        return response()->json($tamu);
    }
}
