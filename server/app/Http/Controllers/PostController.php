<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function create( Request $request){

        // Validate the request
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'caption' => 'required|string',
            'user_id' => 'required|exists:users,id' // Ensure the user_id exists in the users table
        ]);


        $uploadedFile = $request->file('image');
        $extension = $uploadedFile->getClientOriginalExtension();
        $imageName = time() . '.' . $extension;
        $imagePath = $uploadedFile->storeAs('images', $imageName);

        $post = new Post();
        $post->caption = $request->caption;
        $post->image = $imagePath;
        $post->user_id = $request->user_id;
        $post->save();

        return response()->json([
            'success' => true,
            'message' => 'Post added successfully.'
        ], 200);
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
