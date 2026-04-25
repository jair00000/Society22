<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Submission;

class SubmissionController extends Controller
{
    public function contact(Request $request)
    {
        Submission::create([
            'type'    => 'contact',
            'name'    => $request->name,
            'email'   => $request->email,
            'message' => $request->message,
            'status'  => 'pending'
        ]);

        return response()->json(['message' => 'Message received!'], 201);
    }

    public function join(Request $request)
    {
        Submission::create([
            'type'         => 'join',
            'name'         => $request->contactFirstName . ' ' . $request->contactLastName,
            'email'        => $request->contactEmail,
            'phone'        => $request->contactMobile,
            'organization' => $request->hobbyType,
            'message'      => json_encode($request->all()), // Saves full form details
            'status'       => 'pending'
        ]);

        return response()->json(['message' => 'Application submitted!'], 201);
    }
}

