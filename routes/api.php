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
use App\Http\Controllers\InfoKamarController;
use App\Http\Controllers\KategoriController;
use App\Http\Controllers\BookingController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('tamu/search', [TamuController::class, 'search']);
Route::get('tamu/page/{page}', [TamuController::class, 'index']);
Route::resource('tamu', TamuController::class)->except('index');

Route::get('staff/search', [StaffController::class, 'search']);
Route::get('staff/page/{page}', [StaffController::class, 'index']);
Route::resource('staff', StaffController::class)->except('index');

Route::get('shift/search', [ShiftController::class, 'search']);
Route::get('shift/page/{page}', [ShiftController::class, 'index']);
Route::resource('shift', ShiftController::class)->except('index');

Route::get('divisi/search', [DivisiController::class, 'search']);
Route::get('divisi/page/{page}', [DivisiController::class, 'index']);
Route::resource('divisi', DivisiController::class)->except('index');

Route::get('kamar/search', [InfoKamarController::class, 'search']);
Route::get('kamar/page/{page}', [InfoKamarController::class, 'index']);
Route::resource('kamar', InfoKamarController::class)->except('index');

Route::get('kategori/search', [KategoriController::class, 'search']);
Route::get('kategori/page/{page}', [KategoriController::class, 'index']);
Route::resource('kategori', KategoriController::class)->except('index');

Route::get('booking/search', [BookingController::class, 'search']);
Route::get('booking/page/{page}', [BookingController::class, 'index']);
Route::resource('booking', BookingController::class)->except('index');

