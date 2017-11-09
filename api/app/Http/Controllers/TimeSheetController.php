<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TimeSheet;

class TimeSheetController extends Controller
{
    public function index()
    {
        return TimeSheet::all();
    }
 
    public function show($id)
    {
        return TimeSheet::find($id);
    }

    public function store(Request $request)
    {
        return TimeSheet::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $TimeSheet = TimeSheet::findOrFail($id);
        $TimeSheet->update($request->all());

        return $TimeSheet;
    }

    public function delete(Request $request, $id)
    {
        $TimeSheet = TimeSheet::findOrFail($id);
        $TimeSheet->delete();

        return 204;
    }        
}
