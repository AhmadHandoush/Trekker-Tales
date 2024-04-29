<?php

namespace App\Http\Controllers;

use App\Models\User;
use Faker\Core\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

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
    public function update_user(Request $request){
        $user = Auth::users();
        
        if ($request->hasFile('user_image')) {
            if ($user->user_image) {
                Storage::delete($user->user_image);
            }
            $imagePath = $request->file('user_image')->store('profile_images', 'public');
            $request->merge(['user_image' => $imagePath]);
        }


        $user->update($request->all());

        return response()->json(['message'=>$user],200);

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
