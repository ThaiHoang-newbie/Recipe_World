<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $table = 'comments';


    protected $fillable = ['obtainers_id', 'post_id', 'content'];


    public function obtainer()
    {
        return $this->belongsTo(Obtainer::class, 'obtainers_id');
    }


    public function post()
    {
        return $this->belongsTo(Post::class, 'post_id');
    }
}
