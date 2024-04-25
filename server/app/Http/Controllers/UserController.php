<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function get_user($userId)
    {

        $user = User::find($userId);

        if ($user) {

            return response()->json([
                'success' => true,
                'data' => $user
            ]);
        } else {

            return response()->json([
                'success' => false,
                'message' => 'User not found.'
            ], 404);
        }

    }
    public function update_user(Request $req,$id){
        $user=User::findOrFail($id);
        if($user->hasFile('image'))



        $user->update($req->all());

        return response()->json($user);

    }
    function getAllUsers()
    {
        $users = User::all();

        return response()->json([
            "users" => $users
        ]);
    }
    public function user_data(){
        $user = Auth::user();
        return response()->json([
            "user" => $user
        ]);
    }

}
