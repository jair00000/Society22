<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| React frontend + Filament admin
|
*/

/*
|--------------------------------------------------------------------------
| Root Route (VERY IMPORTANT)
|--------------------------------------------------------------------------
*/
Route::get('/', function () {
    return file_get_contents(public_path('build/index.html'));
});

/*
|--------------------------------------------------------------------------
| React Catch-All (exclude admin)
|--------------------------------------------------------------------------
*/
Route::get('/{any}', function () {
    return file_get_contents(public_path('build/index.html'));
})->where('any', '^(?!admin).$');
