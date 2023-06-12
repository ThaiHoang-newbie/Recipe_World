<?php

use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\UserController;


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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// ----------------------------------------------------------------------------

// Get all obtainers
Route::get('/getAllObtainers',[ApiController::class,'getAllObtainer']);

// Get a obtainer
Route::get('/getObtainerById/{id}',[ApiController::class,'getObtainerById']);


// ----------------------------------------------------------------------------

// Get all posts by id
Route::get('/getAllPosts',[ApiController::class,'getAllPost']);

// Get posts by obtainer_id
Route::get('/getPostByObtainerId/{id}',[ApiController::class,'getPostByObtainerId']);

// Get posts by obtainer_id
Route::get('/getPostByCategoryId/{id}',[ApiController::class,'getPostByCategoryId']);



// ----------------------------------------------------------------------------

// Api Register
// Route::get('token', function (Request $request) {
//     $token = $request->session()->token();
//     $token = csrf_token();
//     return Response()->json(array("token"=>$token));
// });

Route::post('/obtainers/login', [UsersController::class, 'onLogin']);


Route::post('obtainers/register',[UserController::class,'onRegister']);


