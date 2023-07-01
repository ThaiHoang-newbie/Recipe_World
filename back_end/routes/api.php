<?php

use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostingController;
use App\Http\Controllers\MailController;
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
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// ----------------------------------------------------------------------------

// Get all obtainers
Route::get('/getAllObtainers', [ApiController::class, 'getAllObtainer']);

// Get a obtainer
Route::get('/get-obtainer/{id}', [ApiController::class, 'getObtainerById']);

// Get a obtainer
Route::put('/put-obtainer/{id}', [UserController::class, 'onEdit']);


// ----------------------------------------------------------------------------

// Get all posts
Route::get('/getAllPosts', [ApiController::class, 'getAllPost']);

Route::get('/getHomepagePosts', [ApiController::class, 'getPostsForHomePage']);

// Get all images post
Route::get('/getAllPostImage', [ApiController::class, 'getAllPostImage']);

// Get posts by obtainer_id
Route::get('/getPostByObtainerId/{id}', [ApiController::class, 'getPostByObtainerId']);

// Get posts by obtainer_id
Route::get('/getPostByCategoryId/{id}', [ApiController::class, 'getPostByCategoryId']);


// ----------------------------------------------------------------------------

// Get all categories
Route::get('/get-categories', [ApiController::class, 'getCategories']);
Route::post('/categories', [ApiController::class, 'getCategories']);



// ----------------------------------------------------------------------------

// Api Register
// Route::get('token', function (Request $request) {
//     $token = $request->session()->token();
    // $token = csrf_token();
//     return Response()->json(array("token"=>$token));
// });

Route::post('/obtainers/login', [UserController::class, 'onLogin']);

Route::post('obtainers/register', [UserController::class, 'onRegister']);

Route::post('verify-email', [UserController::class, 'onRegister']);

// Route::post('obtainers/logout', [UserController::class, 'onLogout']);

Route::get('/session-data', function () {
    return session()->all();
});



// ----------------------------------------------------------------------------

// Posting api

Route::post('posting', [PostingController::class, 'store']);




// ----------------------------------------------------------------------------

// Verify email route

Route::post('send-mail', [MailController::class, 'send']);
Route::post('comparison', [MailController::class, 'comparison']);


// ----------------------------------------------------------------------------

// Add new post

Route::post('add-post', [PostingController::class, 'AddNewPost']);

