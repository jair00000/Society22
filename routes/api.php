<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SubmissionController;
use App\Http\Controllers\PostController;
use App\Models\Form;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Public Form Submission
Route::post('/submissions', [SubmissionController::class, 'store'])
    ->middleware('throttle:5,1');

// --- NEW: Route to list all forms for the selection hub ---
Route::get('/forms', function () {
    return Form::all(['event_name', 'slug']);
});

// --- NEW: Route to fetch a specific dynamic form schema ---
Route::get('/forms/{slug}', function ($slug) {
    return Form::where('slug', $slug)->firstOrFail();
});

// Admin Actions
Route::get('/submissions', [SubmissionController::class, 'index']);
Route::patch('/submissions/{id}/status', [SubmissionController::class, 'updateStatus']);

// CMS Routes (Blogs & Events)
Route::get('/posts', [PostController::class, 'index']);
Route::get('/posts/{id}', [PostController::class, 'show']);
