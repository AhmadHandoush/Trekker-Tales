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
    public function update_user(Request $req,$id){
        $req->validate([
            'user_image' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
        $user=User::findOrFail($id);
        $userData = $req->all();


        if ($req->hasFile('user_image')) {
            $image = $req->file('user_image');
            $imageName = $user->id.'_'.time().'.'.$image->getClientOriginalExtension();
            $image->move(public_path('images'), $imageName);
            $user->image = '/images/'.$imageName;
        }
        $user->update($userData);

        return response()->json(['message'=>'user updated succ'],200);

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
    public function get_teachers(){
        $teachers=User::where('role','teacher')->get();
        return response()->json(['teachers' => $teachers]);

    }
    public function delete_user($id){
        $user=User::findOrFail($id);
        $user->delete();
        return response()->json(['message'=>'user deleted successfully'],200);
    }
    public function get_parents(){
        $parents=User::where('role','parent')->get();
        return response()->json(['parents' => $parents]);

    }
    public function get_users_number(){
        $users=User::where('role','parent')->count();
        return response()->json(['users_number' => $users]);

    }


}
