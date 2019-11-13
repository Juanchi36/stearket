<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Search;

class SearchController extends Controller
{
    public function storeSearch(Request $request) 
    { //var_dump($request->input('userEmail'));die();
        $search = new Search();
        
        $search->userEmail = $request->input('userEmail');
        $search->gameName = $request->input('gameName');
        
        if($search->save()) {
            return response()->json(['success' => true, 'user' => $search]);
        }
    }
}
