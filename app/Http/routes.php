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
    return true;
});
// games routes

$app->get('games', 'GamesController@showAllGames');
$app->get('game', 'GamesController@showOneGame');
$app->delete('game/destroy', 'GamesController@destroyGame');
$app->post('game/store', 'GamesController@storeGame');
$app->put('game/update', 'GamesController@updateGame');

