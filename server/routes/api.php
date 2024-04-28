<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\TripController;
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
    Route::post('add_trip',[TripController::class,'store']);
    Route::get('get_teachers',[UserController::class,'get_teachers']);
    Route::get('get_parents',[UserController::class,'get_parents']);
    Route::post('delete_user/{id}',[UserController::class,'delete_user']);
    Route::post('update_user/{id}',[UserController::class,'update_user']);
    Route::get('locations',[LocationController::class,'get_locations']);
    Route::post('create_trip',[TripController::class,'store']);
    Route::get('get_trips',[TripController::class,'get_trips']);
    Route::get('get_reviews/{trip_id}',[ReviewController::class,'get_reviews']);
});


Route::group(["middleware" => "isUser"], function () {
    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('user',[UserController::class,'user_data']);
        Route::get('user/{userId}', [UserController::class,'get_user']);
        Route::post('update/{userId}', [UserController::class,'update_user']);
        Route::get('posts',[PostController::class,'get_posts']);
        Route::post('dislike/{id}',[LikeController::class,'dislike']);
        Route::post('add_comment/{id}',[CommentController::class,'add_comment']);
        Route::post('update_comment/{id}',[CommentController::class,'update']);
        Route::get('comments/{id}',[CommentController::class,'get_comments']);
        Route::get('comments_number/{id}',[CommentController::class,'get_comments_number']);
        Route::get('get_active_trips',[TripController::class,'get_active_trips']);
        Route::post('add_review/{trip_id}',[ReviewController::class,'add_review']);



    });
});

Route::group(['middleware','isTeacher'],function (){
    Route::group(['middleware' => 'auth:api'], function () {
        Route::post('create',[PostController::class,'create']);
        Route::get('posts',[PostController::class,'get_posts']);
        Route::get('user',[UserController::class,'user_data']);
        Route::post('delete/{id}',[PostController::class,'delete']);
        Route::post('update/{id}',[PostController::class,'update']);
        Route::post('like/{id}',[LikeController::class,'like']);
        Route::post('dislike/{id}',[LikeController::class,'dislike']);
        Route::post('add_comment/{id}',[CommentController::class,'add_comment']);
        Route::post('delete_comment/{id}',[CommentController::class,'delete']);
        Route::post('update_comment/{id}',[CommentController::class,'update']);
        Route::get('comments/{id}',[CommentController::class,'get_comments']);
        Route::get('likes/{id}',[LikeController::class,'get_likes']);
        Route::get('comments_number/{id}',[CommentController::class,'get_comments_number']);
        Route::get('get_active_trips',[TripController::class,'get_active_trips']);


    });
});




// {
//     "name": "Trip 1",
//     "description": "des 1",
//     "start_time": "8:04:27",
//     "end_time": "18:04:27",
//     "date":"2024-04-03",
//     "trip_image":"trip.png",
//     "fees":"200",
//     "total_seats":12,
//     "lunch":"true",
//     "breakfast":"false",
//     "dinner":"false",


//     "locations": [
//         {
//             "id": 1,
//             "arrival_time": "09:00",
//             "departure_time": "10:00"
//         },
//         {
//             "id": 2,
//             "arrival_time": "11:00",
//             "departure_time": "12:00"
//         }
//     ]
// }
