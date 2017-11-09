<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TimeSheet extends Model
{
    protected $fillable = ['employee_id', 'tm_date', 'day_number', 'tm_week', 'start', 'end', 'tm_interval'];
}
