<?php

namespace App\Http\Controllers;

use App\Todo;
use Illuminate\Http\Request;

class TodosController extends Controller
{
    public function all() { // fetch all todos
        return Todo::get();
    }

    public function destroy(Request $request) { // remove a todo
        $id = $request->input('id');
        
        Todo::where('id', '=', $id)->delete();

        return response()->json(['success' => true]); // keeping things simple, no checking
    }

    public function store(Request $request) { // create new
        $todo = new Todo;

        $todo->body = $request->input('body');

        if($todo->save()) {
            return response()->json(['success' => true, 'todo' => $todo]);
        }
    }

    public function done(Request $request) { // mark as done
        $id = $request->input('id');
       
        $todo = Todo::find($id);
        $todo->done = true;
        $todo->save();

        if($todo->save()) {
            return response()->json(['success' => true]);
        }
    }

    public function unDone(Request $request) { // mark as undone
        $id = $request->input('id');
       
        $todo = Todo::where('id', '=', $id)->first();

        $todo->done = false;
        $todo->save();

        if($todo->save()) {
            return response()->json(['success' => true]);
        }
    }
}
