<?php

namespace App\Http\Controllers;

use App\Models\Location;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    public function get_locations(){
        $locations=Location::all();
        return response()->json($locations);
    }
}
