<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostingController extends Controller
{
    public function store(Request $request)
    {
        $inputs = $request->input('inputs');

        $post = new Post();
        $content = '';

        // foreach ($inputs as $input) {
        if (!empty($input['text'])) {
            if (!empty($input['italic'])) {
                $content .= '<i>';
            }
            if (!empty($input['underline'])) {
                $content .= '<u>';
            }
            if (!empty($input['strikeThrough'])) {
                $content .= '<strike>';
            }
            if (!empty($input['bold'])) {
                $content .= '<b>';
            }

            $content .= $inputs['text'];

            if (!empty($input['bold'])) {
                $content .= '</b>';
            }
            if (!empty($input['strikeThrough'])) {
                $content .= '</strike>';
            }
            if (!empty($input['underline'])) {
                $content .= '</u>';
            }
            if (!empty($input['italic'])) {
                $content .= '</i>';
            }

            if (!empty($inputs['images'])) {
                foreach ($inputs['images'] as $image) {
                    $imagePath = $image->store('upload/images');
                    $content .= '<img src="' . asset($imagePath) . '">';
                }
            }

        }

        $post->obtainer_id = 1;
        $post->category_id = 1;
        $post->title = "Abc";
        $post->content = $content;
        $post->thumbnail = "abc.jpg";
        $post->created_at = "2022-10-10";
        $post->updated_at = "2022-10-10";

        $post->save();

        return response()->json(['message' => 'Post created successfully']);
    }
}
