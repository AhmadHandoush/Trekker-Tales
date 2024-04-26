<?php

namespace App\Http\Controllers;

use App\Models\User;
use Faker\Core\File;
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
    // public function update_user(Request $req,$id){
    //     $req->validate([
    //         'name' => 'required|string|max:255',
    //         'email' => 'required|string|email|max:255',
    //         'profile_image' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
    //     ]);
    //     $user=User::findOrFail($id);
    //     if($req->hasFile('profile_image')){
    //         $file = $req->file('profile_image');
    //         $extension = $file->getClientOriginalExtension();
    //         $filename = time() . '.' . $extension;
    //         $file->move(public_path('/profile_pictures/'), $filename);
    //     }
    //     if (File::exists(public_path('/profile_pictures') . $user->user_image)) {
    //         File::delete((public_path('/profile_pictures') . $user->user_image));
    //     }




    //     $user->update($req->all());

    //     return response()->json($user);

    // }
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
    public function get_teachers(){
        $teachers=User::where('role','teacher')->get();
        return response()->json(['comments' => $teachers]);

    }

}
