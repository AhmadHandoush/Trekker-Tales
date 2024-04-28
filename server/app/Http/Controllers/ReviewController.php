<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Models\Trip;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReviewController extends Controller
{
    public function add_review(Request $req,$id){
        $userId=Auth::user()->id;
        $trip=Trip::find($id);
        $req->validate([
            'content'=>'required|string'
        ]);

        $review= new Review();
        $review->user_id=$userId;
        $review->trip_id=$trip->id;
        $review->content=$req->content;
        $review->rating=$req->rating;
        $review->save();

        return response()->json(['success'=>true,'message'=>'review added successfully'],200);
    }
}
