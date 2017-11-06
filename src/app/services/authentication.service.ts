import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../classes/user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

 

@Injectable()
export class AuthenticationService {
  public loggedIn = new BehaviorSubject<boolean>(false); // {1}

  Users = [
    new User(1, 'admin','123', true),
    new User(2, 'user','123', false)
  ];
  
  user: User;
  constructor(
    private _router: Router){}
 
  logout() {
    localStorage.removeItem("user");
    this.loggedIn.next(false);
    this._router.navigate(['/']);
  }
 
  login(user_param){
    let authenticatedUser = this.Users.find(u => u.username === user_param.username);
    if (authenticatedUser && authenticatedUser.password === user_param.password){
      this.user = this.Users.find(u => u.username === user_param.username);      
      localStorage.setItem("user", JSON.stringify(authenticatedUser));      
      this.loggedIn.next(true);   
      this._router.navigate(['/home']);   
      return true;
    }
    return false;
 
  }
 
   checkCredentials(){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['/']);
    } else {
      return true;
    }
  } 
}