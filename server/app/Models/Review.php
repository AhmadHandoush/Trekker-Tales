<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;
    protected $filalble=[
        'trip_id',
        'user_id',
        'rating',
        'content',
    ];
    public function trip(){
        return $this->belongsTo(Trip::class,'trip_id');
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
}
