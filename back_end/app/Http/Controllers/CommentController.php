<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function index($post_id)
    {
        $comments = DB::table('posts')
            ->join('comments', 'posts.id', '=', 'comments.post_id')
            ->join('obtainers', 'obtainers.id', '=', 'comments.obtainer_id')
            ->select('posts.*', 'comments.*', 'obtainers.*')
            ->where('comments.post_id', $post_id)
            ->get();


        return response()->json($comments);
    }
    public function getCommentById($comment_id) {
        $comments = DB::table('posts')
        ->join('comments', 'posts.id', '=', 'comments.post_id')
        ->join('obtainers', 'obtainers.id', '=', 'comments.obtainer_id')
        ->select('posts.*', 'comments.*', 'obtainers.*')
        ->where('comments.id', $comment_id)
        ->get();


    return response()->json($comments);
    }
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'obtainer_id' => 'required',
            'post_id' => 'required',

            'content' => 'required',
        ]);

        $comment = Comment::create($validatedData);

        return response()->json($comment, 201);
    }
}
