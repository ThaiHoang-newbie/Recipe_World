<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    // Register
    public function register(Request $request)
    {
        $request->validate([
            'username' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();

        return response()->json(['message' => 'Registration successful']);
    }

    // Login
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = User::where('email', $request->email)->first();
            if ($user) {
                $user = Auth::user();
                $request->session()->put('user_id', $user->id);
                
                return response()->json(['message' => 'Login successful']);
            } else {
                return response()->json(['error' => 'User not registered'], 404);
            }
        } else {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }
        
    }

    // Logout
    public function logout(Request $request)
    {
        Auth::logout();

        return response()->json(['message' => 'Logout successful']);
    }
}
