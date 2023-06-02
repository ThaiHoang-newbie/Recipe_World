<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderSeller extends Model
{
    use HasFactory;

    protected $table = 'order_sellers';


    protected $fillable = ['seller_id', 'post_id'];


    public function seller()
    {
        return $this->belongsTo(Obtainer::class, 'seller_id');
    }

    public function post()
    {
        return $this->belongsTo(Post::class, 'post_id');
    }
}
