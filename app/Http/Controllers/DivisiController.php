<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Divisi;

class DivisiController extends Controller
{
    public function index($index)
    {
        $page = $index;
        $divisi = Divisi::simplePaginate($page);
        return response()->json($divisi);
    }
    public function store(Request $request)
    {
        $divisi = new Divisi([
            'nama' => $request->input('nama'),
        ]);
        $divisi->save();
        return response()->json([
            'success' => true,
            'message' => 'Division added successfully',
            'data' => $divisi,
        ]);
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
    public function search(Request $request){
        $search_query = Divisi::query();
        $search_param = $request->query('query');

        if($search_param) {
            $search_query = Divisi::search( $search_param);
        }

        $divisi = $search_query->get();
        return response()->json($divisi);
    }
}
