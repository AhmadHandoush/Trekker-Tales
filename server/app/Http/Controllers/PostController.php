<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function create( Request $request){

        $request->validate([
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);


        if ($request->hasFile('image')) {
            $uploadedFile = $request->file('image');
            $extension = $uploadedFile->getClientOriginalExtension();
            $imageName = time() . '.' . $extension;
            $imagePath = $uploadedFile->storeAs('images', $imageName);
        } else {
            $imagePath = null;
        }


        $post = new Post();
        $post->image = $imagePath;
        $post->caption= $request->caption;
        $post->content = $request->content;

        $post->save();

        return back()->with('success', 'post added successfully.');

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
