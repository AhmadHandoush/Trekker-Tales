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
        'name'=>'mira',
        'email'=>'mira@gmail.com',
        'password' => Hash::make('password'),
        'role'=>'teacher',
        'phone'=>234567,
        'longitude'=>122.55,
        'latitude'=>132.5234,
        'user_image'=>'mira.png',
       ]);
    }
}
