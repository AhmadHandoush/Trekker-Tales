<?php

namespace App\Http\Controllers;

use App\Models\Location;
use App\Models\Trip;
use Illuminate\Http\Request;

class TripController extends Controller
{
    public function store(Request $request)
    {
    //    $request->validate([
    //         'name' => 'required|string',
    //         'destination' => 'required|string',
    //         'date' => 'required|date',
    //         'total_seats' => 'required|integer',
    //         'available_seats' => 'required|integer',
    //         'fees' => 'required|numeric',
    //         'description' => 'nullable|string',
    //         // 'trip_image' => 'nullable|string',
    //         'locations' => 'required|array',
    //         'locations.*' => 'exists:locations,id',
    //     ]);

        // $trip = Trip::create([
        //     'name' => $request->name,
        //     'destination' => $request->destination,
        //     'date' => $request->date,
        //     'start_time' =>$request->start_time,
        //     'end_time' =>$request->end_time,
        //     'total_seats' => $request->total_seats,
        //     'available_seats' => $request->available_seats,
        //     'fees' => $request->fees,
        //     'breakfast' => $request->breakfast,
        //     'lunch' => $request->lunch,
        //     'dinner' => $request->dinner,
        //     'description' => $request->description,
        //     'trip_image' => $request->trip_image
        // ]);




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

        if ($request->hasFile('trip_image')) {
            $image = $request->file('trip_image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->storeAs('images', $imageName); // Store the image
            $trip->trip_image = $imageName; // Save the image path to the database
        }



        // if ($request->hasFile('trip_image')) {
        //     $image = $request->file('trip_image');
        //     $imageName = time() . '.' . $image->getClientOriginalExtension();
        //     $image->storeAs('images', $imageName); // Store the image
        //     $trip->trip_image = $imageName; // Save the image path to the database
        // }

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

