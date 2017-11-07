import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../classes/user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataService } from './data.service';

 

@Injectable()
export class AuthenticationService {
  
  public loggedIn = new BehaviorSubject<boolean>(false); // {1}

  user: User;
  constructor(
    private _router: Router, public dataService : DataService){}
 
  logout() {
    localStorage.removeItem("user");
    this.loggedIn.next(false);
    this._router.navigate(['/']);
  }
 
  setUser(user: User){
    this.user = user;
    localStorage.setItem("user", JSON.stringify(user));      
    this.loggedIn.next(true);   
    this._router.navigate(['/home']);       
  }

  login(user_param: User){
    let result: any;
    this.dataService.getUser(user_param)
    .subscribe(
      res => {      
        this.setUser(res);            
      },
      err => {          
        console.log(err);
      }
    );      
  }
 
   checkCredentials(){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['/']);
    } else {
      return true;
    }
  } 
}