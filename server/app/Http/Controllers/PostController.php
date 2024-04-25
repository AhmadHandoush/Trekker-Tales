<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function create( Request $request){

            $post = new Post();
            $post->user_id = $request->user_id;
            $post->content = $request->content;
            $post->caption = $request->caption;
            $post->image = $request->image;

            $post->save();

            return response()->json(['message' => 'Post created successfully'], 201);

    }
    function get_posts(){
        $posts=Post::all();
        return response()->json($posts);
    }
    function delete($id){
        $post= Post::find($id);
        $post->delete();
        return response()->json(['message'=>'post deleted successfully'],201);
    }
}
