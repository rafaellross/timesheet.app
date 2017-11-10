import { Injectable, OnInit, Component } from '@angular/core';
import { Http, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Headers, Jsonp }        from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})



/**
 * @title Table retrieving data through HTTP
 */

export class TestComponent implements OnInit {
  results: object;

  constructor(private http: Http) { }
  apiUrl = "http://127.0.0.1:8000";
  api_token = "";
  ngOnInit() {
    

    let userResult;
    var headers = new Headers();        
    headers.append('Content-Type', 'application/json');       
    let options = new RequestOptions({ headers: headers });

    let body  = {"email": "admin@test.com", "password": "toptal" };
    localStorage.removeItem("auth_token");
    this.http.post(this.apiUrl + '/api/login', body,{ headers: headers })
    .map(response => response.json().data)
    .subscribe(data => {
      this.results = data;
      localStorage.setItem("auth_token", 'Bearer ' + this.results['api_token'])
    });


  }


  test(){
///api_token
  
  var headers = new Headers();     
  headers.append('Authorization', localStorage.getItem("auth_token"));
  let options = new RequestOptions({ headers: headers });
  this.http.get(this.apiUrl + '/api/users', options)
  .map(response => response.json().data)
  .subscribe(data => {
    this.results = data;
  });    
    console.log(this.api_token);
  }

  getUsers(){
    console.log(this.results);
  }
}

