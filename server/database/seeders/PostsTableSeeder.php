<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Post::create([
            // 'caption'=>'ahmad is not here',
            // 'image'=>'ahmad.png',
            'user_id'=>7,
        ]);
    }
}
