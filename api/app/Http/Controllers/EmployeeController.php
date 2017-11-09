<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Employee;

class EmployeeController extends Controller
{
    public function index()
    {
        return Employee::all();
    }
 
    public function show($id)
    {
        return Employee::find($id);
    }

    public function store(Request $request)
    {
        return Employee::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $Employee = Employee::findOrFail($id);
        $Employee->update($request->all());

        return $Employee;
    }

    public function delete(Request $request, $id)
    {
        $Employee = Employee::findOrFail($id);
        $Employee->delete();

        return 204;
    }    
}
