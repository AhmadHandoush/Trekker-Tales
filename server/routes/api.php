<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
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


Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');

});
Route::group(['middleware' => "isAdmin"], function () {
    Route::get('/users',[UserController::class,'getAllUsers']);
});


Route::group(["middleware" => "isUser"], function () {
    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('user',[UserController::class,'user_data']);
        Route::get('user/{userId}', [UserController::class,'get_user']);
        Route::post('update/{userId}', [UserController::class,'update_user']);
        Route::get('posts',[PostController::class,'get_posts']);



});
});

Route::group(['middleware','isTeacher'],function (){
    Route::post('create',[PostController::class,'create']);
    Route::get('posts',[PostController::class,'get_posts']);
    Route::post('delete/{id}',[PostController::class,'delete']);

});
