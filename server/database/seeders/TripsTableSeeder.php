<?php

namespace Database\Seeders;

use App\Models\Trip;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TripsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Trip::create([
        //     'name'=>'amazing',
        //     'destination'=>'Chouf',
        //     'date' => '2024-05-02',
        //      'start_time' => '9:00:00',
        //     'end_time' => '20:00:00',
        //      'total_seats' => 28,
        //      'available_seats' => 28,
        //      'fees' => 244,
        //      'breakfast' => true,
        //      'lunch' => true,
        //      'dinner' => false,
        //      'description' => 'the best trip ever',
        //      'trip_image' => 'perfecto.png',

        // ]);
        $tripId = DB::table('trips')->insertGetId([
            'name'=>'amazing',
            'destination'=>'Chouf',
            'date' => '2024-05-02',
             'start_time' => '9:00:00',
            'end_time' => '20:00:00',
             'total_seats' => 28,
             'available_seats' => 28,
             'fees' => 244,
             'breakfast' => true,
             'lunch' => true,
             'dinner' => false,
             'description' => 'the best trip ever',
             'trip_image' => 'perfecto.png',
        ]);


        $locations = [1, 2];
        DB::table('location_trip')->insert(array_map(function ($locationId) use ($tripId) {
            return [
                'trip_id' => $tripId,
                'location_id' => $locationId,

            ];
        }, $locations));
    }

}
