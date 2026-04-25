<?php

namespace App\Filament\Resources;

use App\Filament\Resources\FormResource\Pages;
use App\Models\Form as FormModel;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class FormResource extends Resource
{
    protected static ?string $model = FormModel::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Form Settings')
                    ->schema([
                        Forms\Components\TextInput::make('event_name')->required(),
                        Forms\Components\TextInput::make('slug')->required()->unique(ignoreRecord: true),
                    ]),

                Forms\Components\Section::make('Form Fields')
                    ->schema([
                        Forms\Components\Builder::make('schema')
                            ->label('Design your form')
                            ->blocks([
                                Forms\Components\Builder\Block::make('text_input')
                                    ->schema([
                                        Forms\Components\TextInput::make('label')->required(),
                                        Forms\Components\Toggle::make('required'),
                                    ]),
                                Forms\Components\Builder\Block::make('textarea')
                                    ->schema([
                                        Forms\Components\TextInput::make('label')->required(),
                                        Forms\Components\Toggle::make('required'),
                                    ]),
                                Forms\Components\Builder\Block::make('checkbox')
                                    ->schema([
                                        Forms\Components\TextInput::make('label')->required(),
                                        Forms\Components\TagsInput::make('options')->placeholder('Add option'),
                                    ]),
                                // ADDED: Radio block for Hobbies/Personality
                                Forms\Components\Builder\Block::make('radio')
                                    ->schema([
                                        Forms\Components\TextInput::make('label')->required(),
                                        Forms\Components\TagsInput::make('options')->placeholder('Add choice'),
                                    ]),
                                // ADDED: Select block for dropdowns
                                Forms\Components\Builder\Block::make('select')
                                    ->schema([
                                        Forms\Components\TextInput::make('label')->required(),
                                        Forms\Components\TagsInput::make('options')->placeholder('Add choice'),
                                    ]),
                            ])
                            ->columnSpanFull(),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('event_name')->searchable()->sortable(),
                Tables\Columns\TextColumn::make('slug')->searchable(),
                Tables\Columns\TextColumn::make('created_at')->dateTime(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
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
            'index' => Pages\ListForms::route('/'),
            'create' => Pages\CreateForm::route('/create'),
            'edit' => Pages\EditForm::route('/{record}/edit'),
        ];
    }
}
