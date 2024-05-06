<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Trip;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BookController extends Controller
{
    public function add_book(Request $req,$id){
        $userId=Auth::user()->id;
        $trip=Trip::find($id);

        if ($trip->available_seats = 0) {
            return response()->json(['success' => false, 'message' => 'No available seats for this trip'], 400);
        }


        $booking= new Booking();
        $booking->user_id=$userId;
        $booking->trip_id=$trip->id;
        $booking->child_name=$req->child_name;

        $booking->save();

        // decrement the available seats by 1
        $trip->decrement('available_seats');


        return response()->json(['success'=>true,'message'=>'booking completed'],200);
    }
}