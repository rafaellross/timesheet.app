<?php

use Illuminate\Http\Request;
Use App\User;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*
Route::middleware('auth:api')
->get('/user', function (Request $request) {
    return $request->user();
});
*/
Route::group(['middleware' => 'auth:api'], function() {
 
});

   //Set User routes
   Route::get('users', 'UserController@index');
   Route::get('users/{id}', 'UserController@show');
   Route::post('users', 'UserController@store');
   Route::put('users/{id}', 'UserController@update');
   Route::delete('users/{id}', 'UserController@delete');

   //Set Employees routes
   Route::get('employees', 'EmployeeController@index');
   Route::get('employees/{id}', 'EmployeeController@show');
   Route::post('employees', 'EmployeeController@store');
   Route::put('employees/{id}', 'EmployeeController@update');
   Route::delete('employees/{id}', 'EmployeeController@delete');

   //Set TimeSheet routes
   Route::get('timesheets', 'TimeSheetController@index');
   Route::get('timesheets/{id}', 'TimeSheetController@show');
   Route::post('timesheets', 'TimeSheetController@store');
   Route::put('timesheets/{id}', 'TimeSheetController@update');
   Route::delete('timesheets/{id}', 'TimeSheetController@delete');

Route::post('register', 'Auth\RegisterController@register');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout');