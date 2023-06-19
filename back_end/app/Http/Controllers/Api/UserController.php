<?php


namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\UsersResource;
use App\Models\Obtainer;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Session;
use Carbon\Carbon;
use Illuminate\Support\Str;

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
            return response()->json(['error' => 'Login unsuccessful!'], 401);
        }

        $primary_token = Str::random(80);
        $token = hash('sha256', $primary_token);
        // $token = csrf_token();


        $obtainer = Obtainer::where('email', $request->email)->first();

        if ($obtainer && Hash::check($request->password, $obtainer->password)) {

            return response()->json(['success' => 1, 'data' => $obtainer, 'token' => $token], 200);
        } else {

            return response()->json(['error' => 'Login unsuccessful!'], 401);
        }
    }





    public function onRegister(Request $request)
    {
        $validator = Validator::make($request->all(), [
            // 'username' => 'required|string',
            'email' => 'required|email|unique:obtainers',
            'password' => 'required',
            'full_name' => 'required|string',
            'confirm_password' => 'required|same:password',
            'date_of_birth' => 'required|date',
            'profile_image_url' => 'required',
        ]);

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

        $imagePath = '/upload/images/' . $imageName;
        try {
            $user = Obtainer::create([
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'full_name' => $request->full_name,
                'date_of_birth' => $request->date_of_birth,
                'profile_image_url' => $imagePath,

            ]);
        } catch (\Illuminate\Database\QueryException $ex) {
            return response()->json(['error' => $ex->getMessage()], 500);
        }
        return response()->json(['success' => 1, 'data' => $user, 'imagePath' => $imagePath], 200);
    }


    public function onLogout()
    {
        session()->forget('token');
        session()->forget('obtainer_id');
        return redirect('http://localhost:3000/login');
    }
}
