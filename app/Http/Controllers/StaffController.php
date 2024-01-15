<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ImageStoreRequest;
use App\Models\Staff;
use File;

class StaffController extends Controller
{
    public function index($index)
    {
        $page = $index;
        $staff = \DB::table("staff")
        ->leftJoin('divisi', 'staff.id_divisi', '=', 'divisi.id')
        ->leftJoin('shift', 'staff.id_shift', '=', 'shift.id')
        ->leftJoin('status_staff', 'staff.id_status', '=', 'status_staff.id')
        ->select(
            'staff.*',
            'divisi.nama as nama_divisi',
            'shift.nama as nama_shift',
            'status_staff.nama as nama_status'
        )
        ->paginate($page);
        return response()->json($staff);
    }
    public function store(ImageStoreRequest $request)
    {
        $validatedData = $request->validated();
        $validatedData['image'] = $request->file('image')->store('staff/image', 'public');
        $staff = new Staff([
            'id_divisi' => $request->input('id_divisi'),
            'id_shift' => $request->input('id_shift'),
            'id_status' => $request->input('id_status'),
            'nama' => $request->input('nama'),
            'email' => $request->input('email'),
            'alamat' => $request->input('alamat'),
            'foto' => $validatedData['image']
        ]);
        $staff->save();
        return response()->json([
            'success' => true,
            'message' => 'Staff added successfully',
            'data' => $staff,
        ]);
    }
    public function show($id)
    {
        $staff = \DB::table("staff")
        ->leftJoin('divisi', 'staff.id_divisi', '=', 'divisi.id')
        ->leftJoin('shift', 'staff.id_shift', '=', 'shift.id')
        ->leftJoin('status_staff', 'staff.id_status', '=', 'status_staff.id')
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
         $imagepath = \public_path('/storage/'.$staff->foto);
         if(File::exists($imagepath)){
             File::delete($imagepath);
         }
         $staff ->delete();
        return response()->json('Staff deleted!');
    }
    public function destroyAllData(){
        \DB::table('staff')->delete();
        $imagepath = \public_path('/storage/staff');
        if(File::exists($imagepath)){
            File::delete($imagepath);
        }
        return response()->json('All Staff deleted!');
    }
    public function search(Request $request)
    {
        $staff = Staff::search(trim($request->get('query')) ?? '')
            ->query(function ($query) {
                $query->leftJoin('divisi', 'staff.id_divisi', 'divisi.id')
                    ->leftJoin('shift', 'staff.id_shift', 'shift.id')
                    ->leftJoin('status_staff', 'staff.id_status', 'status_staff.id')
                    ->select(
                        'staff.*',
                        'divisi.nama as nama_divisi',
                        'shift.nama as nama_shift',
                        'status_staff.nama as nama_status'
                    )
                    ->orderBy('staff.id', 'DESC');
            })
            ->get();

        return response()->json(data: $staff, status: 200);
    }
}
