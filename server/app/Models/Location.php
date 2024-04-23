<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    use HasFactory;
    protected $fillable=[
        'trip_id',
        'name',
        'longitude',
        'latitude',
    ];
    public function trip(){
        return $this->belongsTo(Trip::class);
    }
}
