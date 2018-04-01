<?php

/**
 * Mongo Collections route with pagination
 * i.e: /shops?l=8&p=2
 * @see https://gist.github.com/umutakturk/3804918
 */
Route::get('shops', function (Request $request) {
    $collection = Mongo::get()->shops->shops;
    $page       = isset($_GET['page']) ? (int) $_GET['page'] : 1;
    $limit      = isset($_GET['l']) ? (int) $_GET['l'] : 8;
    $skip       = ($page - 1) * $limit;
    $sort       = [];
    $filter     = [];
    $options    = [
        'skip'  => $skip,
        'limit' => $limit,
        'sort'  => $sort,
    ];

    $cursor = $collection->find($filter, $options)->toArray();
    return $cursor;
});
// Default routes
Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
