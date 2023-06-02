<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderBuyer extends Model
{
    use HasFactory;

    protected $table = 'order_buyers';


    protected $fillable = ['buyer_id', 'post_id'];


    public function buyer()
    {
        return $this->belongsTo(Obtainer::class, 'buyer_id');
    }


    public function post()
    {
        return $this->belongsTo(Post::class, 'post_id');
    }
}
