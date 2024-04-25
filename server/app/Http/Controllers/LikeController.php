<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LikeController extends Controller
{
    function like(Request $req,$id){
        $userId=Auth::user()->id;
        $post=Post::find($id);

        if (!$post) {
            return response()->json([
                'success' => false,
                'message' => 'Post not found.'
            ], 404);
        }
        $like = new Like();
        $like->user_id = $userId;
        $like->post_id = $post->id;
        $like->save();

        return response()->json([
            'success' => true,
            'message' => 'Post liked successfully.'
        ], 200);



    }
}
