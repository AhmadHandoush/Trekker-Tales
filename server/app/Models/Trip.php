<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trip extends Model
{
    use HasFactory;

    public function locations(){
        return $this->belongsToMany(Location::class)->withPivot('arrival_time', 'departure_time');
    }
    public function booking(){
        return $this->hasMany(Booking::class,'trip_id');
    }
    public function reviews(){
        return $this->hasMany(Review::class,'trip_id');
    }


}
