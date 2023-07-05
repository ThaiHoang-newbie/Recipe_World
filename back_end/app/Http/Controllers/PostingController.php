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
            $post->title = $request->title;
            $post->content = $request->content;
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
}