<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/', function () use ($app) {
    return view('default');
});

$app->get('/hola-mundo', function () use ($app) {
    return view('hola');
});

// todo routes
$app->get('todos', 'TodosController@all');
$app->post('todos/destroy', 'TodosController@destroy');
$app->post('todos/store', 'TodosController@store');
$app->post('todos/done', 'TodosController@done');
$app->post('todos/undone', 'TodosController@unDone');