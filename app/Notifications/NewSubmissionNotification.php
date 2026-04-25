<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NewSubmissionNotification extends Notification
{
    use Queueable;

    protected $submission;

    public function __construct($submission)
    {
        $this->submission = $submission;
    }

    public function via($notifiable)
    {
        return ['mail'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('New Society 22 Inquiry: ' . $this->submission->name)
            ->greeting('Hello Society 22 Team,')
            ->line('A new ' . $this->submission->type . ' has been submitted.')
            ->line('**Name:** ' . $this->submission->name)
            ->line('**Email:** ' . $this->submission->email)
            ->line('**Message:** ' . $this->submission->message)
            ->action('View in Dashboard', url('/admin/submissions'))
            ->line('Thank you for using the Society 22 portal!');
    }
}
