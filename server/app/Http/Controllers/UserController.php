<?php

namespace App\Http\Controllers;

use App\Models\User;
use Faker\Core\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    public function add_teacher(Request $request)
    {

        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:6',
        ]);


        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->role = 'teacher';
        $user->save();

        return response()->json(['message' => 'User created successfully'], 201);
    }
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
        $user = Auth::user();

        if ($request->hasFile('user_image')) {
            $image = $request->file('user_image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('images'), $imageName);
            $user->user_image = $imageName;
        }
        // $user->update($request->except('user_image'));
        // $user->phone= $request->phone;
        // $user->address= $request->address;
        if($request->has('phone') && $request->has('address')){
            $user->address= $request->address;
            $user->phone= $request->phone;
        }
        $user->name= $request->name;
        return response()->json(["message"=>"info updated successfully",$user]);


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
    public function get_teachers_number(){
        $users=User::where('role','teacher')->count();
        return response()->json(['teachers_number' => $users]);

    }
    public function update_teacher_info(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->update($request->all());

        return response()->json(['messgae'=>'updated successfully',$user]);
    }



}
