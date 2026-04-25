<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Notification;
use App\Notifications\NewSubmissionNotification;

class Submission extends Model
{
    protected $fillable = [
        'type',
        'name',
        'email',
        'phone',
        'organization',
        'message',
        'status',
        'source', // Add this line here
    ];

    /**
     * The "booted" method of the model.
     * This handles logic that happens automatically.
     */
    protected static function booted()
    {
        static::created(function ($submission) {
            // Define the recipients
            // We use the +inquiry alias for Gmail to force it into your Inbox
            $recipients = [
                'contact@society22.club',
                'society22ph+inquiry@gmail.com',
            ]; 

            // Send the notification
            Notification::route('mail', $recipients)
                ->notify(new NewSubmissionNotification($submission));
        });
    }
}
