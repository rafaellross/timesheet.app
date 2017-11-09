<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $fillable = ['cod_emp', 'name', 'dob', 'phone', 'image'];    
}
