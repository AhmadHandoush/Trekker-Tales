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
        // $req->validate([
        //     'content'=>'required|string'
        // ]);

        $review= new Review();
        $review->user_id=$userId;
        $review->trip_id=$trip->id;
        $review->content=$req->content;
        $review->rating=$req->rating;
        $review->save();

        return response()->json(['success'=>true,'message'=>'review added successfully'],200);
    }
    public function get_reviews($trip_id){
        $reviews = Review::where('trip_id', $trip_id)->get();
        return response()->json(['reviews' => $reviews]);
    }

    public function average_rating($trip_id)
    {
        $average_rating = Review::where('trip_id', $trip_id)->avg('rating');
        return response()->json(['average_rating' => $average_rating]);
    }

    public function get_highest_rated()
    {
        $highestRatedTrips = Review::with(['trip' => function ($query) {
            $query->select('*');
        }])
            ->selectRaw('trip_id, AVG(rating) as average_rating')
            ->groupBy('trip_id')
            ->orderByDesc('average_rating')
            ->limit(3)
            ->get();

        return response()->json($highestRatedTrips);
    }
    public function get_highest_ra()
    {
        $highestRatedTrips = Review::with(['trip' => function ($query) {
            $query->select('*');
        }])
            ->selectRaw('trip_id, AVG(rating) as average_rating')
            ->groupBy('trip_id')
            ->orderByDesc('average_rating')
            ->limit(3)
            ->get();

        return response()->json($highestRatedTrips);
    }
}
