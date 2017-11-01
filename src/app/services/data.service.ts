import { Injectable, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Employee } from '../classes/employee';
import { Timesheet } from '../classes/timesheet';
import { Headers }        from '@angular/http';


@Injectable()
export class DataService {
  constructor(private http: Http) { }
  Selecteds: Employee[] = [];
  
  getEmployees(name: string){
    return this.http.get('http://localhost/timesheet/list-employees.php?name=' + name)
    .map(response => <Employee[]> response.json().data);
  }
  
  selectEmployee(employee: Employee){    
    if(this.Selecteds.find(x => x.id === employee.id) === undefined){      
      this.Selecteds.push(employee);      
    }     
  }

  unselectEmployee(employee: Employee)  {
    this.Selecteds = this.Selecteds.filter(item => item !== employee);
  }

  saveTimeSheet(timesheet: Timesheet){
/*
    let body = JSON.stringify(timesheet);
    return this.http.post('http://localhost/timesheet/save.php', body)
    .subscribe(data=> data);*/
    var headers = new Headers();
    
    
    
    
    
    headers.append('Content-Type', 'text/plain');
      
    let options = new RequestOptions({ headers: headers });
    
    this.http.post('http://localhost/timesheet/save.php', timesheet,{ headers: headers })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }
}
