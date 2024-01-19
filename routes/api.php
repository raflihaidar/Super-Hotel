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
use App\Http\Controllers\DetailBookingController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FakturController;
use App\Http\Controllers\StatusKamarController;



Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->get('/tamu', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::delete('tamu/delete-all', [TamuController::class, 'destroyAllData']);
Route::get('tamu/search', [TamuController::class, 'search']);
Route::get('tamu/page/{page}', [TamuController::class, 'index']);
Route::resource('tamu', TamuController::class)->except('index');

Route::delete('staff/delete-all', [StaffController::class, 'destroyAllData']);
Route::get('staff/search', [StaffController::class, 'search']);
Route::get('staff/page/{page}', [StaffController::class, 'index']);
Route::resource('staff', StaffController::class)->except('index');

Route::delete('shift/delete-all', [ShiftController::class, 'destroyAllData']);
Route::get('shift/search', [ShiftController::class, 'search']);
Route::get('shift/page/{page}', [ShiftController::class, 'index']);
Route::resource('shift', ShiftController::class)->except('index');

Route::delete('divisi/delete-all', [DivisiController::class, 'destroyAllData']);
Route::get('divisi/search', [DivisiController::class, 'search']);
Route::get('divisi/page/{page}', [DivisiController::class, 'index']);
Route::resource('divisi', DivisiController::class)->except('index');

Route::delete('kamar/delete-all', [InfoKamarController::class, 'destroyAllData']);
Route::get('kamar/count', [InfoKamarController::class, 'getCount']);
Route::get('kamar/available-count', [InfoKamarController::class, 'getAvailableCount']);
Route::get('kamar/unavailable-count', [InfoKamarController::class, 'getUnavailableCount']);
Route::get('kamar/search', [InfoKamarController::class, 'search']);
Route::post('kamar/filter-status', [InfoKamarController::class, 'filteredByStatus']);
Route::get('kamar/check', [InfoKamarController::class, 'checkAvailability']);
Route::get('kamar/page/{page}', [InfoKamarController::class, 'index']);
Route::get('kamar/get-room-id', [InfoKamarController::class, 'getRoomId']);
Route::resource('kamar', InfoKamarController::class)->except('index');

Route::get('status-kamar', [StatusKamarController::class, 'index']);

Route::delete('kategori/delete-all', [KategoriController::class, 'destroyAllData']);
Route::get('kategori/search', [KategoriController::class, 'search']);
Route::get('kategori/page/{page}', [KategoriController::class, 'index']);
Route::resource('kategori', KategoriController::class)->except('index');

Route::delete('booking/delete-all', [BookingController::class, 'destroyAllData']);
Route::get('booking/count', [BookingController::class, 'getCount']);
Route::get('booking/checkin-count', [BookingController::class, 'getCheckInCount']);
Route::get('booking/checkout-count', [BookingController::class, 'getCheckOutCount']);
Route::get('booking/stay-count', [BookingController::class, 'getStayCount']);
Route::get('booking/search', [BookingController::class, 'search']);
Route::get('booking/page/{page}', [BookingController::class, 'index']);
Route::resource('booking', BookingController::class)->except('index');

Route::post('/detail-booking/update-total', [DetailBookingController::class, 'updateTotal']);
Route::get('detail-booking/{id_tamu}', [DetailBookingController::class, 'getBookingHistory']);
Route::resource('detail-booking', DetailBookingController::class);

Route::resource('faktur', FakturController::class);



