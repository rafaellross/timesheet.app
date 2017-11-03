import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Day } from '../../classes/day';
import { Timesheet } from '../../classes/timesheet';
import { Week } from '../../classes/week';
import * as moment from 'moment';
import { DOCUMENT } from '@angular/platform-browser';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  ListWeeks: Week[];
  Days: Day[] = [];
  Today: moment.Moment;
  Selectedweek: Week;
  
  constructor(public dataService : DataService, @Inject(DOCUMENT) private document: any, private _service:AuthenticationService) {}
  
  
  ngOnInit() {   
    this._service.checkCredentials();
    this.Days.push(new Day(0, "Monday"));
    this.Days.push(new Day(1, "Tuesday"));
    this.Days.push(new Day(2, "Wednesday"));
    this.Days.push(new Day(3, "Thursday"));
    this.Days.push(new Day(4, "Friday"));
    this.Days.push(new Day(5, "Saturday", false));
    this.Days.push(new Day(6, "Sunday", false));


    //Initialize ListWeeks
    this.ListWeeks = this.dataService.getListWeeks();    

  }

  save(){    
    this.dataService.Selecteds.forEach(employee => {      
      let timeSheets: Timesheet[] = [];
      this.Days.forEach(day =>{
        if(day.Worked){
          let timeSheet: Timesheet = new Timesheet();                
          timeSheet.start = day.Start;
          timeSheet.end = day.End;
          timeSheet.employee = employee.id;
          timeSheet.interval = 0;        
          timeSheet.weekStart = this.dataService.SelectedWeek;
          timeSheet.dayNumber = day.Number;
          timeSheets.push(timeSheet);        
        }        
      });
      if(!this.dataService.saveTimeSheet(timeSheets)){
        alert("TimeSheets for " + employee.name + " included with success");
        document.location.href = "/manage";
      } else {     
        alert("One error occurred on include TimeSheet of" + employee.name + "!");
      }

    });    
  }

  setWeek(week: Week){

    this.dataService.SelectedWeek = week.Start.toLocaleDateString();
  }

}
