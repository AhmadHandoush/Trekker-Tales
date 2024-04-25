<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       User::create([
        'name'=>'hamada',
        'email'=>'hamda@gmail.com',
        'password' => Hash::make('hamada1999'),
        'role'=>'admin',
        'phone'=>81303288,
        'longitude'=>12.55,
        'latitude'=>13.5234,
        'user_image'=>'ahmad.png',
       ]);
    //    User::create([
    //     'name'=>'louna',
    //     'email'=>'louna@gmail.com',
    //     'password' => Hash::make('password'),
    //     'role'=>'teacher',
    //    ]);
    }
}
