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





    // Get all posts
    public function getAllPost()
    {
        $posts = DB::table('posts')
            ->join('obtainers', 'obtainers.id', '=', 'posts.obtainer_id')
            ->join('categories', 'posts.category_id', '=', 'categories.id')
            ->select('obtainers.*', 'posts.*', 'categories.*')
            ->get();
        return response()->json($posts);
    }
    public function getPostById($id)
    {
        $posts = Post::with('obtainer', 'category')
        ->where('id', $id)
        ->inRandomOrder()
        ->take(6)
        ->get();

    return response()->json($posts);
    }
    public function getPostsForHomePage()
    {
        $posts = Post::with('obtainer', 'category')
            ->inRandomOrder()
            ->take(6)
            ->get();

        return response()->json($posts);
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
