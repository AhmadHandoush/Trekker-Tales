<?php

namespace App\Http\Controllers;

use App\Models\Location;
use App\Models\Trip;
use Illuminate\Http\Request;

class TripController extends Controller
{
    public function store(Request $request)
    {
        // Validate the incoming request data
        // $request->validate([
        //     'name' => 'required|string',
        //     'fees' => 'required|numeric',
        //     'date' => 'required|date',
        //     'start_time' => 'required|date_format:H:i',
        //     'end_time' => 'required|date_format:H:i',
        //     'total_seats' => 'required|integer',
        //     'breakfast'=>'required|boolean',
        //     'lunch'=>'required|boolean',
        //     'dinner'=>'required|boolean',
        //     'locations' => 'required|array',
        //     'locations.*.name' => 'required|string',
        //     'locations.*.latitude' => 'required|numeric',
        //     'locations.*.longitude' => 'required|numeric',
        // ]);


        // $trip = new Trip();
        // $trip->name = $request->name;
        // $trip->price = $request->fees;
        // $trip->date = $request->date;
        // $trip->start_time = $request->start_time;
        // $trip->end_time = $request->end_time;
        // $trip->breakfast = $request->breakfast;
        // $trip->lunch = $request->lunch;
        // $trip->dinner = $request->dinner;
        // $trip->trip_image = $request->trip_image;
        // $trip->total_seats = $request->total_seats;
        // $trip->save();


        // foreach ($request->locations as $locationData) {
        //     $location = new Location();
        //     $location->trip_id = $trip->id;
        //     $location->name = $locationData['name'];
        //     $location->latitude = $locationData['latitude'];
        //     $location->longitude = $locationData['longitude'];
        //     $location->save();
        // }

        // return response()->json(['message' => 'Trip created successfully'], 201);
        return 'hello';
    }
}
