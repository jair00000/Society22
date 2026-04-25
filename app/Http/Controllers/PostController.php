<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index(Request $request)
    {
        $query = Post::where('status', 'published');

        if ($request->has('type') && in_array($request->query('type'), ['blog', 'event'])) {
            $query->where('type', $request->query('type'));
        }

        return response()->json($query->latest('published_at')->get());
    }

    public function show($id)
    {
        return response()->json(
            Post::where('id', $id)
                ->where('status', 'published')
                ->firstOrFail()
        );
    }
}
