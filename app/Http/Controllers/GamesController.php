<?php

namespace App\Http\Controllers;

use App\Todo;
use Illuminate\Http\Request;
use App\Game;

class GamesController extends Controller
{
    public function showAllGames() 
    { // fetch all games
        return Game::get();
    }

    public function showOneGame(Request $request)
    { // show one game
        $id = $request->input('id');
        return Game::findOrFail($id);
    }

    public function destroyGame(Request $request) 
    { // remove a game
        $id = $request->input('id');
        
        Game::where('id', '=', $id)->delete();

        return response()->json(['success' => true]); // keeping things simple, no checking
    }

    public function storeGame(Request $request) 
    { // create new game
        $game = new Game;
        
        $game->name = $request->input('name');
        
        if($game->save()) {
            return response()->json(['success' => true, 'game' => $game]);
        }
    }

    public function update($id, Request $request)
    {
        // $game = Game::findOrFail($id);
        // $game->update($request->all());

        // return response()->json($game, 200);
        return 'update';
    }

}
