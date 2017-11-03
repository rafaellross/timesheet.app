import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Week } from '../../classes/week';
import { TimeSheetGroup } from '../../classes/timesheetgroup';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {  
  TimeSheetList: TimeSheetGroup[] = [];
  ListWeeks: Week[] = [];
  Selectedweek: Week;
  constructor(public dataService : DataService, private _service:AuthenticationService) {}

  logout() {
      this._service.logout();
  }

  ngOnInit() {
    this._service.checkCredentials();
     //Initialize ListWeeks
     this.ListWeeks = this.dataService.getListWeeks();   
     this.dataService.getTimeSheets(this.dataService.SelectedWeek, "weekStart")
     .subscribe(data => this.TimeSheetList = data);             
      
  }

  loadTimeSheets(week: Week){    
    this.dataService.getTimeSheets(week.Start.toDateString(), "weekStart").subscribe(data => this.TimeSheetList = data);        
    this.dataService.SelectedWeek = week.Start.toDateString();
  }

}
