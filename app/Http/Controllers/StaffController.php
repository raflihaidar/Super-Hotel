<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Staff;

class StaffController extends Controller
{
    public function index($index)
    {
        $page = $index;
        $staff = \DB::table("staff")
        ->join('divisi', 'staff.id_divisi', '=', 'divisi.id')
        ->join('shift', 'staff.id_shift', '=', 'shift.id')
        ->join('status_staff', 'staff.id_status', '=', 'status_staff.id')
        ->select(
            'staff.*',
            'divisi.nama as nama_divisi',
            'shift.nama as nama_shift',
            'status_staff.nama as nama_status'
        )
        ->simplePaginate($page);
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
        $staff = \DB::table("staff")
        ->join('divisi', 'staff.id_divisi', '=', 'divisi.id')
        ->join('shift', 'staff.id_shift', '=', 'shift.id')
        ->join('status_staff', 'staff.id_status', '=', 'status_staff.id')
        ->select(
            'staff.*',
            'divisi.nama as nama_divisi',
            'shift.nama as nama_shift',
            'status_staff.nama as nama_status'
        )
        ->where('staff.id', $id)
        ->first();
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
    public function search(Request $request)
    {
        $staff = Staff::search(trim($request->get('query')) ?? '')
            ->query(function ($query) {
                $query->join('divisi', 'staff.id_divisi', 'divisi.id')
                    ->join('shift', 'staff.id_shift', 'shift.id')
                    ->select('staff.*', 'divisi.nama as divisi', 'shift.nama as shift')
                    ->orderBy('staff.id', 'DESC');
            })
            ->get();

        return response()->json(data: $staff, status: 200);
    }
}
