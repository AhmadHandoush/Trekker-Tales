<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookController;
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

    Route::get('get_highest_ra',[ReviewController::class,'get_highest_ra']);
    Route::get('/users',[UserController::class,'getAllUsers']);
    Route::post('add_trip',[TripController::class,'store']);
    Route::post('add_teacher',[UserController::class,'add_teacher']);
    Route::get('get_teacherss',[UserController::class,'get_teacherss']);
    Route::get('get_locations',[LocationController::class,'get_locations']);
    Route::get('get_parents',[UserController::class,'get_parents']);
    Route::post('delete_user/{id}',[UserController::class,'delete_user']);
    Route::post('update_user/{id}',[UserController::class,'update_user']);
    Route::get('locations',[LocationController::class,'get_locations']);
    Route::post('create_trip',[TripController::class,'store']);
    Route::get('get_trips',[TripController::class,'get_trips']);
    Route::get('get_trip/{trip_id}',[TripController::class,'get_trip']);
    Route::get('get_reviews/{trip_id}',[ReviewController::class,'get_reviews']);
    Route::get('average_rating/{trip_id}',[ReviewController::class,'average_rating']);
    Route::get('get_users_number',[UserController::class,'get_users_number']);
    Route::get('get_teachers_number',[UserController::class,'get_teachers_number']);
    Route::get('get_trips_number',[TripController::class,'get_trips_number']);
    Route::post('update_teacher_info/{teacher_id}',[UserController::class,'update_teacher_info']);
    Route::post('update_trip_status/{id}',[TripController::class,'update']);
    Route::get('get_all',[UserController::class,'get_all']);

});


Route::group(["middleware" => "isUser"], function () {

        Route::get('user',[UserController::class,'user_data']);
        Route::get('user/{userId}', [UserController::class,'get_user']);
        Route::post('update_user',[UserController::class,'update_user']);
        Route::get('posts',[PostController::class,'get_posts']);
        Route::post('dislike/{id}',[LikeController::class,'dislike']);
        Route::post('delete_booking/{id}',[BookController::class,'delete_booking']);
        Route::post('like/{id}',[LikeController::class,'like']);
        Route::post('add_comment/{post_id}',[CommentController::class,'add_comment']);
        Route::post('update_comment/{id}',[CommentController::class,'update']);
        Route::get('comments/{id}',[CommentController::class,'get_comments']);
        Route::get('comments_number/{id}',[CommentController::class,'get_comments_number']);
        Route::get('get_active_trips',[TripController::class,'get_active_trips']);
        Route::get('average_rating/{trip_id}',[ReviewController::class,'average_rating']);
        Route::post('add_review/{trip_id}',[ReviewController::class,'add_review']);
        Route::get('get_highest_rated',[ReviewController::class,'get_highest_rated']);


        // Route::get('get_trip/{trip_id}',[TripController::class,'get_trip']);
        Route::post('add_book/{trip_id}',[BookController::class,'add_book']);
        // Route::get('get_highest_rated',[ReviewController::class,'get_highest_rated']);
        Route::get('get_trips',[TripController::class,'get_trips']);
        Route::get('get_trip/{trip_id}',[TripController::class,'get_trip']);
        Route::get('getBookingsByUser',[BookController::class,'getBookingsByUser']);
        Route::get('post_owner_data',[PostController::class,'post_owner_data']);
        Route::get('get_all',[UserController::class,'get_all']);
        Route::get('get_teachers',[UserController::class,'get_teachers']);
        Route::get('likes/{id}',[LikeController::class,'get_likes']);









});

Route::group(['middleware','isTeacher'],function (){
        Route::post('update_user',[UserController::class,'update_user']);
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
        Route::get('get_children/{trip_id}',[BookController::class,'get_children']);
        Route::get('get_trips',[TripController::class,'get_trips']);
        Route::get('get_trip/{trip_id}',[TripController::class,'get_trip']);
        Route::get('get_parents',[UserController::class,'get_parents']);
        Route::get('get_all',[UserController::class,'get_all']);
        Route::get('post_owner_data',[PostController::class,'post_owner_data']);



});


// Route::group(['middleware' => 'auth:api'], function () {
