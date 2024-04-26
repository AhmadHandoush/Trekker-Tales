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
        $request->validate([
            'name' => 'required|string',
            'destination' => 'required|string',
            'date' => 'required|date',
            'start_time' => 'required|date_format:H:i',
            'end_time' => 'required|date_format:H:i',
            'total_seats' => 'required|integer',
            'available_seats' => 'required|integer',
            'fees' => 'required|numeric',
            'breakfast' => 'boolean',
            'lunch' => 'boolean',
            'dinner' => 'boolean',
            'description' => 'nullable|string',
            'trip_image' => 'nullable|string',
        ]);


        // $trip = new Trip();
        // $trip->name = $request->name;
        // $trip->fees = $request->fees;
        // $trip->description = $request->description;
        // $trip->date = $request->date;
        // $trip->start_time = $request->start_time;
        // $trip->end_time = $request->end_time;
        // $trip->breakfast = $request->breakfast;
        // $trip->lunch = $request->lunch;
        // $trip->dinner = $request->dinner;
        // $trip->trip_image = $request->trip_image;
        // $trip->total_seats = $request->total_seats;
        // $trip->available_seats = $request->total_seats;
        // $trip->save();
        // $trip = Trip::create($request->all());



        // return response()->json(['message' => 'Trip created successfully'], 201);
        return 'hello';
    }
}
