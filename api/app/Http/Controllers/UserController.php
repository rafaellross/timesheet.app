<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function index()
    {
        return User::all();
    }
 
    public function show($id)
    {
        return User::find($id);
    }

    public function store(Request $request)
    {
        return User::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $User = User::findOrFail($id);
        $User->update($request->all());

        return $User;
    }

    public function delete(Request $request, $id)
    {
        $User = User::findOrFail($id);
        $User->delete();

        return 204;
    }    
}
