<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
use App\Http\Controllers\TamuController;
use App\Http\Controllers\StaffController;
use App\Http\Controllers\ShiftController;
use App\Http\Controllers\DivisiController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::delete('tamu/delete/{id}', [TamuController::class, 'destroy']);
Route::get('tamu/search', [TamuController::class, 'search']);
Route::get('tamu/id={id}', [TamuController::class, 'show']);
Route::post('tamu', [TamuController::class, 'store']);
Route::patch('tamu/update/{id}', [TamuController::class, 'update']);
Route::get('tamu/{page}', [TamuController::class, 'index']);

Route::get('staff', [StaffController::class, 'index']);
Route::get('staff/id={id}', [StaffController::class, 'show']);
Route::post('staff', [StaffController::class, 'store']);
Route::patch('staff/update/{id}', [StaffController::class, 'update']);
Route::delete('staff/delete/{id}', [StaffController::class, 'destroy']);

Route::get('shift', [ShiftController::class, 'index']);
Route::get('shift/id={id}', [ShiftController::class, 'show']);
Route::post('shift', [ShiftController::class, 'store']);
Route::patch('shift/update/{id}', [ShiftController::class, 'update']);
Route::delete('shift/delete/{id}', [ShiftController::class, 'destroy']);

Route::get('divisi', [DivisiController::class, 'index']);
Route::get('divisi/id={id}', [DivisiController::class, 'show']);
Route::post('divisi', [DivisiController::class, 'store']);
Route::patch('divisi/update/{id}', [DivisiController::class, 'update']);
Route::delete('divisi/delete/{id}', [DivisiController::class, 'destroy']);


