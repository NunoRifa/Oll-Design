<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GalleriesController;
use App\Http\Controllers\ImagingController;
use App\Http\Controllers\TagsController;
use App\Http\Controllers\MailController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('galleries', GalleriesController::class);

Route::get('/imagings', [ImagingController::class, 'index']);
Route::post('/imagings', [ImagingController::class, 'store']);
Route::delete('/imagings/{id}', [ImagingController::class, 'destroy']);

Route::get('/galleryList', [ImagingController::class, 'index']);

Route::get('/tags', [TagsController::class, 'index']);
Route::post('/tags', [TagsController::class, 'store']);
Route::put('/tags/{id}', [TagsController::class, 'update']);
Route::delete('/tags/{id}', [TagsController::class, 'destroy']);


Route::post('/sendEmail', [MailController::class, 'sendEmail']);