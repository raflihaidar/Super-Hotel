<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Divisi;

class DivisiController extends Controller
{
    public function index()
    {
        $divisi = Divisi::all();
        return response()->json($divisi);
    }
    public function store(Request $request)
    {
        $divisi = new Divisi([
            'nama' => $request->input('nama'),
        ]);
        $divisi->save();
        return response()->json('Divisi created!');
    }
    public function show($id)
    {
        $divisi = Divisi::find($id);
        return response()->json($divisi);
    }
   public function update($id, Request $request)
    {
         $divisi  = Divisi::find($id);
         $divisi ->update($request->all());
        return response()->json('Divisi updated!');
    }
    public function destroy($id)
    {
         $divisi  = Divisi::find($id);
         $divisi ->delete();
        return response()->json('Divisi deleted!');
    }
}
