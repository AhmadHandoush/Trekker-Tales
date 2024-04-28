<?php

namespace App\Http\Controllers;

use App\Models\Location;
use App\Models\Trip;
use Illuminate\Http\Request;

class TripController extends Controller
{
    public function store(Request $request)
    {
       $request->validate([
            'name' => 'required|string',
            'destination' => 'required|string',
            'date' => 'required|date',
            'start_time' => 'required|date_format:H:i',
            'end_time' => 'required|date_format:H:i',
            'total_seats' => 'required|integer',
            'available_seats' => 'required|integer',
            'fees' => 'required|numeric',
            'description' => 'nullable|string',
            'trip_image' => 'nullable|string',
            'locations' => 'required|array',
            'locations.*' => 'exists:locations,id',
        ]);


        $trip = Trip::create([
            'name' => $request->name,
            'destination' => $request->destination,
            'date' => $request->date,
            'start_time' =>$request->start_time,
            'end_time' =>$request->end_time,
            'total_seats' => $request->total_seats,
            'available_seats' => $request->available_seats,
            'fees' => $request->fees,
            'breakfast' => $request->breakfast,
            'lunch' => $request->lunch,
            'dinner' => $request->dinner,
            'description' => $request->description,
            'trip_image' => $request->destination,
        ]);
        $trip->locations()->attach($request->locations);

        return response()->json(['message' => 'Trip created successfully', 'trip' => $trip], 201);
    }
}



// 'name' => 'required|string',
//             'destination' => 'required|string',
//             'date' => 'required|date',
//             'start_time' => 'required|date_format:H:i',
//             'end_time' => 'required|date_format:H:i',
//             'total_seats' => 'required|integer',
//             'available_seats' => 'required|integer',
//             'fees' => 'required|numeric',
//             'breakfast' => 'boolean',
//             'lunch' => 'boolean',
//             'dinner' => 'boolean',
//             'description' => 'nullable|string',
//             'trip_image' => 'nullable|string',
