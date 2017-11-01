import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Day } from '../../classes/day';
import { Timesheet } from '../../classes/timesheet';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  Days: Day[] = [];

  constructor(private dataService : DataService) {}

  ngOnInit() {   
    this.Days.push(new Day(1, "Monday"));
    this.Days.push(new Day(2, "Tuesday"));
    this.Days.push(new Day(3, "Wednesday"));
    this.Days.push(new Day(4, "Thursday"));
    this.Days.push(new Day(5, "Friday"));
    this.Days.push(new Day(6, "Saturday"));
    this.Days.push(new Day(7, "Sunday"));
  }

  save(){    
    this.dataService.Selecteds.forEach(employee => {
      this.Days.forEach(day =>{
        let timeSheet: Timesheet = new Timesheet();
        
        this.dataService.saveTimeSheet(new Timesheet);
      });
        
    });
  }

}
