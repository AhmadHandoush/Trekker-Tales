<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{




    public function create( Request $request){


        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'caption' => 'required|string',

        ]);
        $user = Auth::user();


        $uploadedFile = $request->file('image');
        $extension = $uploadedFile->getClientOriginalExtension();
        $imageName = time() . '.' . $extension;
        $imagePath = $uploadedFile->storeAs('images', $imageName);

        $post = new Post();
        $post->caption = $request->caption;
        $post->image = $imagePath;
        $post->user_id = $user->id;
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
    function update( Request $request,$id){

        $post=Post::find($id);



        if(!$post){
            return response()->json([
                'success' => false,
                'message' => 'Post not found.'
            ],404);
        }
        $post->caption = $request->caption;

        $post->save();


        return response()->json([
            'success' => true,
            'message' => 'Post updated successfully.',
            'data' => $post
        ], 200);

    }


}
