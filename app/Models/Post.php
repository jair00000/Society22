<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'title',
        'content',
        'excerpt',
        'featured_image',
        'status',
        'type',
        'published_at',
    ];
}
