import { Injectable, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Employee } from '../classes/employee';
import { Timesheet } from '../classes/timesheet';
import { Headers }        from '@angular/http';
import * as moment from 'moment';
import { Week } from '../classes/week';
import { TimeSheetGroup } from '../classes/timesheetgroup';

@Injectable()
export class DataService {
  constructor(private http: Http) { }
  Selecteds: Employee[] = [];
  SelectedWeek: string;
  

  getListWeeks(): Week[]{
    let ListWeeks = [];
    //Set today date
    let Today = moment();        
    
    ListWeeks.push({Start: new Date(Today.startOf('week').add(1, 'day').format()), End: Today.endOf('week').add(1, 'day').toDate()});
    
    Today.subtract(2, 'week');
    ListWeeks.push({Start: Today.startOf('week').add(1, 'day').toDate(), End: Today.endOf('week').add(1, 'day').toDate()});        
    
    Today.subtract(2, 'week');
    ListWeeks.push({Start: Today.startOf('week').add(1, 'day').toDate(), End: Today.endOf('week').add(1, 'day').toDate()});

    Today.subtract(2, 'week');
    ListWeeks.push({Start: Today.startOf('week').add(1, 'day').toDate(), End: Today.endOf('week').add(1, 'day').toDate()});       
    return ListWeeks;
  }

  getEmployees(name: string){
    return this.http.get('http://localhost/timesheet/list-employees.php?name=' + name)
    .map(response => <Employee[]> response.json().data);
  }
  
  getTimeSheets(value: string, key: string){
    return this.http.get('http://localhost/timesheet/list-timesheet.php?' + key + '=' + value)    
    .map(response => <TimeSheetGroup[]> response.json().data);
  }

  selectEmployee(employee: Employee){    
    if(this.Selecteds.find(x => x.id === employee.id) === undefined){      
      this.Selecteds.push(employee);      
    }     
  }

  unselectEmployee(employee: Employee)  {
    this.Selecteds = this.Selecteds.filter(item => item !== employee);
  }

  saveTimeSheet(timesheet: Timesheet[]){
    var headers = new Headers();        
    headers.append('Content-Type', 'text/plain');
      
    let options = new RequestOptions({ headers: headers });
    
    this.http.post('http://localhost/timesheet/save.php', timesheet,{ headers: headers })
      .subscribe(
        res => {
          return res;
        },
        err => {
          return false;
        }
      );
  }
}
