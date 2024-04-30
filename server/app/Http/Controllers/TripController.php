<?php

namespace App\Http\Controllers;

use App\Models\Location;
use App\Models\Trip;
use Illuminate\Http\Request;

class TripController extends Controller
{
    public function store(Request $request)
    {


        $trip = new Trip();
        $trip->name = $request->name;
        $trip->destination = $request->destination;
        $trip->date = $request->date;
        $trip->start_time = $request->start_time;
        $trip->end_time = $request->end_time;
        $trip->total_seats = $request->total_seats;
        $trip->available_seats = $request->available_seats;
        $trip->fees = $request->fees;
        $trip->description = $request->description;
        $trip->breakfast = $request->breakfast;
        $trip->lunch = $request->lunch;
        $trip->dinner = $request->dinner;

        if ($request->hasFile('trip_image')) {
            $image = $request->file('trip_image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->storeAs('images', $imageName);
            $trip->trip_image = $imageName;
        }




        $trip->save();


        $trip->locations()->attach($request->locations);

        return response()->json(['message' => 'Trip created successfully', 'trip' => $trip], 201);
    }
    public function delete($id){
        $trip= Trip::findOrFail($id);
        $trip->delete();
        return response()->json(['success'=>true,'message'=>'trip deleted successfully'],200);

    }
    public function get_trips(){
        $trips = Trip::with('locations')->get();
        return response()->json(['trips' => $trips], 200);

    }
    public function get_active_trips(){

        $trips = Trip::with('locations')->where('status', 'active')->get();

        return response()->json(['trips' => $trips], 200);
    }

    public function get_trips_number(){
        $trips=Trip::all()->count();

        return response()->json(['trips_number' => $trips], 200);
    }
}

