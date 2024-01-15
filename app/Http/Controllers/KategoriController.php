<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\KategoriKamar;
use App\Http\Requests\ImageStoreRequest;
use File;

class KategoriController extends Controller
{
    public function index($index)
    {
        $page = $index;
        $kategori = KategoriKamar::paginate($page);
        return response()->json($kategori);
    }
    public function store(ImageStoreRequest $request)
    {
        $validatedData = $request->validated();
        $validatedData['image'] = $request->file('image')->store('kategori/image', 'public');
        $kategori = new KategoriKamar([
            'nama' => $request->input('nama'),
            'fasilitas' => $request->input('fasilitas'),
            'deskripsi' => $request->input('deskripsi'),
            'harga' => $request->input('harga'),
            'jumlah_kamar' => $request->input('jumlah_kamar'),
            'foto' => $validatedData['image']
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
        $imagepath = \public_path('/storage/'.$kategori->foto);
         if(File::exists($imagepath)){
             File::delete($imagepath);
         }
        $kategori->delete();
        return response()->json('Category deleted!');
    }
    public function destroyAllData(){
        $imagepath = \public_path('/storage/');
        if(File::exists($imagepath)){
            File::delete($imagepath);
        }
        \DB::table('kategori_kamar')->delete();
        return response()->json('All Category deleted!');
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
