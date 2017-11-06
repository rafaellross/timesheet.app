<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Employee
 *
 * @author Smart Plumbing
 */
class TimeSheetGroup {

    public $id;
    public $name;
    public $week;
    public $total;
    public function __construct($id, $name, $week, $total) {
        $this->id = $id;
        $this->name = $name;
        $this->week = $week;        
        $this->total = $total;
    }
}
