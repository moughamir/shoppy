<?php

// Mongo collections route
Route::get('shops', function (Request $request, $limit=8, $page=1) {
    $collection = Mongo::get()->shops->shops;
    
    return $collection->find()->limit($limit)->toArray();
});
// Default routes
Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
