<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTimesheetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
   
        Schema::create('time_sheets', function (Blueprint $table) {
            $table->increments('id');                        
            $table->date('tm_date');
            $table->integer('day_number');
            $table->date('tm_week');            
            $table->integer('start');
            $table->integer('end');
            $table->integer('tm_interval');
            $table->timestamps();
            

        });
        Schema::table('time_sheets', function($table) {
            $table->integer('employee_id')->unsigned()->after('id');
            $table->foreign('employee_id')->references('id')->on('employees');
            $table->integer('user_id')->unsigned()->after('tm_interval');
            $table->foreign('user_id')->references('id')->on('users');
            
        });  
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('timesheets');
    }
}
