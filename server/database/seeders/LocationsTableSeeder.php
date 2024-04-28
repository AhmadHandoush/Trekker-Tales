<?php

namespace Database\Seeders;

use App\Models\Location;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LocationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       Location::create(
        ['name'=>"jiita",'longitude'=>'33.94386917902692','latitude'=>'35.64130077448859'],

       );
    }
}
