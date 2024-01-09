<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\KategoriKamar;

class KategoriController extends Controller
{
    public function index($index)
    {
        $page = $index;
        $kategori = KategoriKamar::paginate($page);
        return response()->json($kategori);
    }
    public function store(Request $request)
    {
        $kategori = new KategoriKamar([
            'kategori' => $request->input('kategori'),
            'fasilitas' => $request->input('fasilitas'),
            'deskripsi' => $request->input('deskripsi'),
            'harga' => $request->input('harga'),
            'jumlah_kamar' => $request->input('jumlah_kamar'),
        ]);
        $kategori->save();
        return response()->json([
            'success' => true,
            'message' => 'Category added successfully',
            'data' => $kategori,
        ]);
    }
    public function show($id)
    {
        $kategori = KategoriKamar::where('id', $id)->first();
        return response()->json($kategori);
    }
   public function update($id, Request $request)
    {
        $kategori = KategoriKamar::find($id);
        $kategori->update($request->all());
        return response()->json('Category updated!');
    }
    public function destroy($id)
    {
        $kategori = KategoriKamar::find($id);
        $kategori->delete();
        return response()->json('Category deleted!');
    }

    public function search(Request $request){
        $search_query = KategoriKamar::query();
        $search_param = $request->query('query');

        if($search_param) {
            $search_query = KategoriKamar::search( $search_param);
        }

        $kategori = $search_query->get();
        return response()->json($kategori);
    }
}
