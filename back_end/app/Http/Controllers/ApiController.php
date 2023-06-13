<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


use App\Models\Obtainer;
use App\Models\Post;

class ApiController extends Controller
{

    // Get all obtainer
    public function getAllObtainer()
    {
        $allObtainers = Obtainer::all();
        return response()->json($allObtainers);
    }


    // Get obtainer by obtainer id
    public function getObtainerById($id)
    {
        // $obtainer = DB::table('Obtainers')->where('id', $id)->first();
        $obtainerById = Obtainer::find($id);

        if ($obtainerById) {
            return response()->json($obtainerById);
        } else {
            return response()->json(['error' => 'Obtainer not found'], 404);
        }
    }





    // Get all posts by id
    public function getAllPost()
    {
        $allPosts = Post::all();
        return response()->json($allPosts);
    }



    // Get all posts by obtainer_id
    public function getPostByObtainerId($id)
    {
        $postByObtainerId = Post::all()->where('obtainer_id', $id);

        if ($postByObtainerId) {
            return response()->json($postByObtainerId);
        } else {
            return response()->json(['error' => `This user hasn't any posts`], 404);
        }
    }

    // Get all posts posts by category_id
    public function getPostByCategoryId($id)
    {
        $postByCategoryId = Post::all()->where('category_id', $id);

        if ($postByCategoryId) {
            return response()->json($postByCategoryId);
        } else {
            return response()->json(['error' => `This category hasn't any posts`], 404);
        }
    }
}
