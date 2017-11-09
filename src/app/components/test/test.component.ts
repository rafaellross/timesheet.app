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
  results: object[];

  constructor(private http: Http) { }
  apiUrl = "http://127.0.0.1:8000";
  ngOnInit() {
    /*
    this.http.get(this.apiUrl + '/api/users')
    .map(res => res.json())    
    .subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data;
    });
    */


    let userResult;
    var headers = new Headers();        
    headers.append('Content-Type', 'application/json');
    //headers.append('Access-Control-Allow-Origin','*');

      
    let options = new RequestOptions({ headers: headers });
    let body  = {"name": "John", "email": "john.doe@toptal.com", "password": "toptal123", "password_confirmation": "toptal123"};
    this.http.post(this.apiUrl + '/api/register', body,{ headers: headers })
    .map(response => response.json())
    .subscribe(data => {
      this.results = data;
    });


  }


  test(){
    console.log(this.results);
  }
}

