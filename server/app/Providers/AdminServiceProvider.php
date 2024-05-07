<?php

namespace App\Providers;

use App\Models\AdminNotification;
use App\Models\Booking;
use Illuminate\Support\ServiceProvider;

class AdminServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {

    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        Booking::created(function ($book) {
            AdminNotification::insert([
                "child_name" => $book->child_nmae,
                "trip_id" => $book->trip_id,
                "created_at" => now(),
                "updated_at" => now()
            ]);
        });
    }
}
