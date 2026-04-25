<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SubmissionResource\Pages;
use App\Models\Submission;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class SubmissionResource extends Resource
{
    protected static ?string $model = Submission::class;

    protected static ?string $navigationIcon = 'heroicon-o-inbox';
    protected static ?string $navigationLabel = 'Inquiries';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Submission Details')
                    ->schema([
                        Forms\Components\TextInput::make('name')->required(),
                        Forms\Components\TextInput::make('email')->email()->required(),
                        Forms\Components\TextInput::make('phone'),
                        Forms\Components\TextInput::make('organization'),

                        Forms\Components\Textarea::make('message')
                            ->label('Message Content')
                            ->rows(10)
                            ->columnSpanFull(),

                        Forms\Components\TextInput::make('source')->readOnly(), 
                        Forms\Components\Select::make('status')
                            ->options([
                                'in_review' => 'In review',
                                'waitlisted' => 'Waitlisted',
                                'contacted' => 'Contacted',
                                'rejected' => 'Rejected',
                                'paid' => 'Paid',
                            ])
                            ->default('in_review')
                            ->selectablePlaceholder(false) // Removes "Select an option"
                            ->required(),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->defaultSort('created_at', 'desc')
            ->columns([
                Tables\Columns\TextColumn::make('name')->searchable(),
                Tables\Columns\TextColumn::make('email')->searchable(),
                Tables\Columns\TextColumn::make('source')
                    ->badge()
                    ->color('gray')
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Received At')
                    ->dateTime()
                    ->sortable(),
                Tables\Columns\SelectColumn::make('status')
                    ->options([
                        'in_review' => 'In review',
                        'waitlisted' => 'Waitlisted',
                        'contacted' => 'Contacted',
                        'rejected' => 'Rejected',
                        'paid' => 'Paid',
                    ])
                    ->selectablePlaceholder(false), // Removes "Select an option" from table dropdown
            ])
            ->actions([
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListSubmissions::route('/'),
            'edit' => Pages\EditSubmission::route('/{record}/edit'),
        ];
    }
}
