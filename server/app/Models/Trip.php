<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trip extends Model
{
    use HasFactory;
    protected $fillable= [
        'name',
        'destination',
        'date',
        'start_time',
        'end_time',
        'total_seats',
        'available_seats',
        'price',
        'breakfast',
        'lunch',
        'dinner',

    ];
    public function location(){
        return $this->hasMany(Location::class,'trip_id');
    }
    public function booking(){
        return $this->hasMany(Booking::class,'trip_id');
    }
    public function review(){
        return $this->hasMany(Review::class,'trip_id');
    }


}
