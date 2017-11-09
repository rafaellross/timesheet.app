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
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Day } from '../classes/day';
import { User } from '../classes/user';

@Injectable()
export class DataService {

  private loggedIn = new BehaviorSubject<boolean>(false); // {1}
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
    return this.http.get('http://192.168.1.119/timesheet/list-employees.php?name=' + name)
    .map(response => <Employee[]> response.json().data);
  }
  
  getTimeSheets(value: string, key: string){
    return this.http.get('http://192.168.1.119/timesheet/list-timesheet.php?' + key + '=' + value)    
    .map(response => <TimeSheetGroup[]> response.json().data);
  }

  getLastTimeSheets(user: User){
    return this.http.get('http://192.168.1.119/timesheet/list-timesheet.php?user=' + user.id)    
    .map(response => <TimeSheetGroup[]> response.json().data);
  }
  getTimeSheet(employeeId: string, Week: string){
    return this.http.get('http://192.168.1.119/timesheet/list-timesheet.php?employee=' + employeeId + '&&weekStart=' + Week)
    .map(response => <Timesheet[]> response.json().data);
  }

  selectEmployee(employee: Employee){    
    if(this.Selecteds.find(x => x.id === employee.id) === undefined){      
      this.Selecteds.push(employee);      
    }     
  }

  unselectEmployee(employee: Employee)  {
    this.Selecteds = this.Selecteds.filter(item => item !== employee);
  }

  calculateTotal(days: Day[]){
    let result = 0;
    days.forEach(day => {
      result += day.End - day.Start;
    });
    return result;
  }

  getUser(user: User){
    let userResult;
    var headers = new Headers();        
    headers.append('Content-Type', 'text/plain');
      
    let options = new RequestOptions({ headers: headers });
    
    return this.http.post('http://192.168.1.119/timesheet/user.php?action=get', user,{ headers: headers })
    .map(response => <User[]> response.json().data);         
  }

  getUserById(id: string){
    let userResult;
    var headers = new Headers();        
    headers.append('Content-Type', 'text/plain');
      
    let options = new RequestOptions({ headers: headers });
    
    return this.http.post('http://192.168.1.119/timesheet/user.php?action=byId', {"id": id},{ headers: headers })
    .map(response => <User[]> response.json().data);         
  }

  saveUser(user: User){
    var headers = new Headers();        
    headers.append('Content-Type', 'text/plain');
      
    let options = new RequestOptions({ headers: headers });
    let action = user.id === null ? 'insert' : 'update';
    this.http.post('http://192.168.1.119/timesheet/user.php?action=' + action, user,{ headers: headers })
      .subscribe(
        res => {
          return res;
        },
        err => {
          return false;
        }
      );
  }  
  saveTimeSheet(timesheet: Timesheet[], action: string = "insert"){
    var headers = new Headers();        
    headers.append('Content-Type', 'text/plain');
      
    let options = new RequestOptions({ headers: headers });
    
    this.http.post('http://192.168.1.119/timesheet/save.php?action=' + action, timesheet,{ headers: headers })
      .subscribe(
        res => {
          return res;
        },
        err => {
          return false;
        }
      );
  }

  loginTest(){
    
    return this.http.get('http://localhost:8000/api/users')
    .map(response => response.json().data);
    
  }


}
