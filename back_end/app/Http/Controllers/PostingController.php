<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Carbon\Carbon;

class PostingController extends Controller
{
    public function addPost(Request $request)
    {
        try {
            $post = new Post;
            $post->obtainer_id = $request->obtainer_id;
            $post->category_id = $request->category_id;

            $post->name = $request->name;

            $post->instruction = $request->instruction;

            $post->preparetion_time = $request->preparetion_time;

            $post->cooking_time = $request->cooking_time;

            $post->description = $request->description;

            $post->ingredients = $request->ingredients;

            $post->thumbnail = $request->thumbnail;

            $post->price = $request->price;

            $post->created_at = Carbon::now();
            $post->updated_at = Carbon::now();
            $post->save();
        } catch (\Illuminate\Database\QueryException $ex) {
            return response()->json(['error' => $ex->getMessage()], 500);
        };
        return response()->json(['success' => 1, 'data' => $post], 200);
    }

    public function editPost(Request $request)
    {
        $postId = $request->input('postId');
        $post = Post::findOrFail($postId);

        $post->obtainer_id = $request->input('obtainer_id');
        $post->category_id = $request->input('category_id');
        $post->name = $request->input('name');
        $post->instruction = $request->input('instruction');
        $post->preparetion_time = $request->input('preparetion_time');
        $post->cooking_time = $request->input('cooking_time');
        $post->description = $request->input('description');
        $post->ingredients = $request->input('ingredients');
        $post->thumbnail = $request->input('thumbnail');
        $post->price = $request->input('price');
        $post->updated_at = Carbon::now();
        $post->save();
        return response()->json(['message' => 'Post updated successfully']);
    }
}
