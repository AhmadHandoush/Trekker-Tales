<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function add_comment(Request $req, $id){
        $userId=Auth::user()->id;
        $post=Post::find($id);
        $req->validate([
            'comment'=>'required|string'
        ]);

        $comment= new Comment();
        $comment->user_id=$userId;
        $comment->post_id=$post->id;
        $comment->comment=$req->comment;
        $comment->save();

        return response()->json(['success'=>true,'message'=>'comment added successfully'],200);




    }
    public function delete($id){
        $comment=Comment::find($id);
        $comment->delete();
        return response()->json(['success'=>true,'message'=>'comment deleted successfully'],200);

    }
    public function update(Request $req, $id){
        $req->validate([
            'comment'=>'string',
        ]);
        $comment=Comment::find($id);
        $comment->update($req->all());
        return response()->json(['message'=>'comment updated successfully'],201);

    }
    public function get_comments($postId)
    {

        $comments = Comment::where('post_id', $postId)->get();
        return response()->json(['comments' => $comments]);
    }
    public function get_comments_number($id){
        $comments=Comment::where('post_id',$id)->count();
        return response()->json(['comments'=>$comments],200);
    }
}
