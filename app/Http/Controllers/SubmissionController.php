<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Submission;

class SubmissionController extends Controller
{
    /**
     * Store a new submission from the React front-end.
     * Handles dynamic data from any Society 22 form.
     */
    public function store(Request $request)
    {
        // 1. SPAM PROTECTION (Honeypot)
        if ($request->filled('extra_info')) {
            return response()->json(['message' => 'Processed successfully.'], 200);
        }

        // 2. FLEXIBLE VALIDATION
        // Validates that we are receiving the correct base structure.
        $request->validate([
            'type'     => 'required|string',
            'formData' => 'required|array', 
        ]);

        // 3. FORMAT THE DYNAMIC DATA
        // This takes the 'formData' object and turns it into a readable string for the 'message' column.
        $formData = $request->input('formData');
        $formattedMessage = "Form Submission Data:\n" . str_repeat("-", 25) . "\n";

        foreach ($formData as $key => $value) {
            $label = ucwords(str_replace(['_', '-'], ' ', $key));

            if (is_array($value)) {
                $displayValue = implode(", ", $value);
            } elseif (is_bool($value)) {
                $displayValue = $value ? "Yes" : "No";
            } else {
                $displayValue = $value;
            }

            $formattedMessage .= "{$label}: {$displayValue}\n";
        }

        // 4. PREPARE FOR DATABASE
        // We explicitly map the fields that are 'NOT NULL' in your database.
        // Adding 'status' => 'pending' here solves the Integrity Constraint Violation.
        $submissionData = [
            'type'    => $request->type,
            'message' => $formattedMessage,
            'source'  => ($request->type === 'join') ? 'Join Form' : 'Contact Form',
            'status'  => 'pending', 
            
            // Map the required database columns with dynamic fallbacks to ensure no NULL errors.
            'name'    => $formData['Full Name'] ?? $formData['Name'] ?? 'Guest',
            'email'   => $formData['Email'] ?? $formData['Email Address'] ?? 'no-email@society22.com',
        ];

        // 5. SAVE TO DATABASE
        // Remember to ensure these keys are in the $fillable array in App\Models\Submission.php
        $submission = Submission::create($submissionData);

        // 6. RESPONSE FOR REACT
        return response()->json([
            'status'  => 'success',
            'message' => 'Inquiry submitted successfully!',
            'id'      => $submission->id
        ], 201);
    }
}
