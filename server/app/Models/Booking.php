<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;
    protected $fillable=[
        'trip_id',
        'user_id',
        'child_name',
        'paid',
        'card_number',
        'name_on_card',
        'expiry_date',
        'cvv',
    ];
    public function trip(){
        return $this->belongsTo(Trip::class);
    }
    public function User(){
        return $this->belongsTo(User::class);
    }
}
