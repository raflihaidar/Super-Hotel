<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tamu;

class TamuController extends Controller
{

    public function index($index)
    {
        $page = $index;
        $tamu = Tamu::paginate($page);
        return response()->json($tamu);
    }
    public function store(Request $request)
    {
        $tamu = new Tamu([
            'nik' => $request->input('nik'),
            'nama' => $request->input('nama'),
            'username' => $request->input('username'),
            'password' => $request->input('password'),
            'telephone' => $request->input('telephone'),
            'email' => $request->input('email'),
            'alamat' => $request->input('alamat'),
        ]);
        $tamu->save();
        return response()->json('Guets created!');
    }
    public function show($id)
    {
        $tamu = Tamu::where('id', $id)->first();
        return response()->json($tamu);
    }
   public function update($id, Request $request)
    {
        $tamu = Tamu::find($id);
        $tamu->update($request->all());
        return response()->json('Guest updated!');
    }
    public function destroy($id)
    {
        $tamu = Tamu::find($id);
        $tamu->delete();
        return response()->json('Guest deleted!');
    }
    public function search(Request $request){
        $search_query = Tamu::query();
        $search_param = $request->query('query');

        if($search_param) {
            $search_query = Tamu::search( $search_param);
        }

        $tamu = $search_query->get();
        return response()->json($tamu);
    }
}
