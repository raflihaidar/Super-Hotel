<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Staff;

class StaffController extends Controller
{
    public function index()
    {
        $staff = Staff::all();
        return response()->json($staff);
    }
    public function store(Request $request)
    {
        $staff = new Staff([
            'id_divisi' => $request->input('id_divisi'),
            'id_shift' => $request->input('id_shift'),
            'id_status' => $request->input('id_status'),
            'nama' => $request->input('nama'),
            'email' => $request->input('email'),
            'alamat' => $request->input('alamat'),
            'foto' => $request->input('foto'),
        ]);
        $staff->save();
        return response()->json('Staff created!');
    }
    public function show($id)
    {
        $staff = Staff::find($id);
        return response()->json($staff);
    }
   public function update($id, Request $request)
    {
         $staff  = Staff::find($id);
         $staff ->update($request->all());
        return response()->json('Staff updated!');
    }
    public function destroy($id)
    {
         $staff  = Staff::find($id);
         $staff ->delete();
        return response()->json('Staff deleted!');
    }
}
