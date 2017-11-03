import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Day } from '../../classes/day';
import { Week } from '../../classes/week';
import * as moment from 'moment';
import { DataService } from '../../services/data.service';
import { Timesheet } from '../../classes/timesheet';
import { Weekday, ListWeekDays } from '../../classes/weekday';
import { AuthenticationService } from '../../services/authentication.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  TimeSheetList: Timesheet[] = [];
  EmployeeId: number;
  Week: string;
  ListWeeks: Week[];
  Days: Day[] = [];
  Today: moment.Moment;
  
  constructor(private route: ActivatedRoute, public dataService : DataService, private _service:AuthenticationService) {}
  ngOnInit() {
    this._service.checkCredentials();

    this.route.params.subscribe(params => {
      this.EmployeeId = params['employee'];
      this.Week = params['week'];
    });
    this.getTimeSheet(this.EmployeeId, this.Week);    
  }

  getTimeSheet(employeeId: number, Week: string){
    this.dataService.getTimeSheet(employeeId.toString(), Week)
    .subscribe(
      data => {        
        this.load(data)
      },
      err => {
        return false;
      }
    );    
  }

  load(timesheet: Timesheet[]){
    this.TimeSheetList = timesheet;    
    this.TimeSheetList.forEach(timesheetList => {      
      let day = new Day(ListWeekDays[timesheetList.dayNumber.toString()].Number, ListWeekDays[timesheetList.dayNumber.toString()].Name);
      day.Start = timesheetList.start;
      day.End = timesheetList.end;
      day.Worked = true;
      day.TimeSheetId = timesheetList.id;

      this.Days.push(day);
    });

  }

  save(){           
      let timeSheets: Timesheet[] = [];
      this.Days.forEach(day =>{
        if(day.Worked){
          let timeSheet: Timesheet = new Timesheet();                
          timeSheet.start = day.Start;
          timeSheet.end = day.End;
          timeSheet.employee = this.EmployeeId;
          timeSheet.interval = 0;        
          timeSheet.weekStart = this.dataService.SelectedWeek;
          timeSheet.dayNumber = day.Number;
          timeSheet.id = day.TimeSheetId;
          timeSheets.push(timeSheet);        
        }        
      });
      if(!this.dataService.saveTimeSheet(timeSheets, "update")){
        
        document.location.href = "/manage";
      } else {     
        alert("One error occurred on include TimeSheet of!");
      }

    
  }
}
