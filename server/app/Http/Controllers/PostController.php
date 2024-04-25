<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function create_post( Request $request){
        $post = new Post();
        $post->fill($request->all()); // Fill model with all request inputs
        $post->save();

        return response()->json(['message' => 'Post created successfully'], 201);


    }
    function get_posts(){
        $posts=Post::all();
        return response()->json($posts);
    }
}
