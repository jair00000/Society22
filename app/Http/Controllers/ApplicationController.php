<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Application;

class ApplicationController extends Controller
{
    public function store(Request $request)
    {
        // Validate input
        $validated = $request->validate([
            'full_name' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'nullable|string|max:20',
            'event_name' => 'nullable|string|max:255',
            'message' => 'nullable|string',
        ]);

        // Save to database
        $application = Application::create($validated);

        // Return response
        return response()->json([
            'message' => 'Application submitted successfully',
            'data' => $application
        ], 201);
    }
}
