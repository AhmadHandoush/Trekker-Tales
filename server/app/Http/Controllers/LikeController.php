<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LikeController extends Controller
{
    function like($id){
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
    function dislike($id){
        $userId=Auth::user()->id;
        $post= Post::find($id);
        $like = Like::where('user_id', $userId)
                    ->where('post_id', $post->id)
                    ->first();

        if (!$like) {
                return response()->json([
                    'success' => false,
                    'message' => 'You have not liked this post.'
                ], 404);
            }

            $like->delete();

            return response()->json([
                'success' => true,
                'message' => 'Post unliked successfully.'
            ], 200);


    }
}
