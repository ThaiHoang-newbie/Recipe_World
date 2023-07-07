<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostingController extends Controller
{
    public function store(Request $request)
    {
        $inputs = $request->input('inputs');

        if (!is_array($inputs)) {
            $inputs = [];
        }

        $post = new Post();
        $content = '';

        foreach ($inputs as $index => $input) {
            $text = $input['text-' . $index];
            $italic = isset($input['italic']) ? $input['italic'] : false;
            $underline = isset($input['underline']) ? $input['underline'] : false;
            $strikeThrough = isset($input['strikeThrough']) ? $input['strikeThrough'] : false;
            $bold = isset($input['bold']) ? $input['bold'] : false;

            if (!empty($text)) {
                if ($italic) {
                    $content .= '<i>';
                }
                if ($underline) {
                    $content .= '<u>';
                }
                if ($strikeThrough) {
                    $content .= '<strike>';
                }
                if ($bold) {
                    $content .= '<b>';
                }

                $content .= $text;

                if ($bold) {
                    $content .= '</b>';
                }
                if ($strikeThrough) {
                    $content .= '</strike>';
                }
                if ($underline) {
                    $content .= '</u>';
                }
                if ($italic) {
                    $content .= '</i>';
                }

                if (!empty($input['images'])) {
                    foreach ($input['images'] as $image) {
                        $imagePath = $image->store('upload/images');
                        $content .= '<img src="' . asset($imagePath) . '">';
                    }
                }
            }
        }

        $post->obtainer_id = 1;
        $post->category_id = 1;
        $post->title = "Title ne";
        $post->content = $content;
        $post->thumbnail = "abc.jpg";
        $post->created_at = "2022-10-11";
        $post->updated_at = "2022-10-11";
        $post->save();

        return response()->json(['message' => 'Post created successfully']);
    }
}
