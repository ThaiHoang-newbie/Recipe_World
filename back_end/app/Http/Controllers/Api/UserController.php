<?php


namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\UsersResource;
use App\Models\Obtainer;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new UsersResource(Obtainer::all());
    }


    public function onLogin(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => "Login không thành công!"], 401);
        }

        $obtainer = Obtainer::where("email", $request->email)
            ->where("password", $request->password)
            ->first();

        if ($obtainer->count() > 0) {
            return response()->json(['success' => 1, 'data' => $obtainer[0]]);
        } else {
            return response()->json(['error' => 'Login không thành công!'], 401);
        }
    }




    public function onRegister(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
            'confirm_password' => 'required|same:password',
            'date_of_birth' => 'required|date|before_or_equal:today',
            'profile_image_url' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Obtainer::create($request->all()); 

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $imageName = null;
        if ($request->hasFile('profile_image_url')) {
            $image = $request->file('profile_image_url');
            $imageName = $image->getClientOriginalName();
            $destinationPath = public_path('/upload/images');
            $imagePath = $destinationPath . '/' . $imageName;
            $image->move($destinationPath, $imageName);
        }

        $user = Obtainer::create([
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'full_name' => $request->full_name,
            'date_of_birth' => $request->date_of_birth,
            'profile_image_url' => $imageName,

            // 'remember_token' => $request->token,
            'created_at' => Carbon::now('Asia/Da_Nang')->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now('Asia/Da_Nang')->format('Y-m-d H:i:s'),
        ]);
        return response()->json(['success' => 1, 'data' => $user], 200);


        // return response()->json([],200);
    }
}
