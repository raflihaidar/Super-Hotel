<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Shift;

class ShiftController extends Controller
{
    public function index($index)
    {
        $page = $index;
        $shift = Shift::simplePaginate($page);
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
        return response()->json('Shift created!');
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
}
