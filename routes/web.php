<?php

use MongoDB\Client as Mongo;

Route::get('shops', function(Request $request){
    $collection = (new Mongo)->shops->shops;
    return $collection->find()->toArray();
});

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
