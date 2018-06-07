<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/trumps', function () {

    $monster1 = DB::table('monsters')->get()->random(1);

    $monster1_id = $monster1[0]->id;

    $monster2 = DB::table('monsters')->where('id', '!=', $monster1_id)->get()->random(1);

    return response()->json(
        ['monster1' => $monster1, 'monster2' => $monster2]
    );

    // return view('trumps')->with(['monster1' => $monster1, 'monster2' => $monster2]);
    // return view('trumps')->with(['monster1' => $monster1, 'monster2' => $monster2]);
});
