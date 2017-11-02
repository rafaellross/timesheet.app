import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Week } from '../../classes/week';
import { TimeSheetGroup } from '../../classes/timesheetgroup';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {  
  TimeSheetList: TimeSheetGroup[] = [];
  ListWeeks: Week[] = [];
  constructor(private dataService : DataService) {}

  ngOnInit() {
     //Initialize ListWeeks
     this.ListWeeks = this.dataService.getListWeeks();   
     this.dataService.getTimeSheets("30/10/2017", "weekStart")
     .subscribe(data => this.TimeSheetList = data);             
      
  }

  loadTimeSheets(week: Week){    
    this.dataService.getTimeSheets("30/10/2017", "weekStart").subscribe(data => this.TimeSheetList = data);
    
    console.log(this.TimeSheetList);
    
  }

}
