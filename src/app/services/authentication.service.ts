import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../classes/user';
 

 

@Injectable()
export class AuthenticationService {
  Users = [
    new User('admin','123', true),
    new User('user','123', false)
  ];
  
  user: User;
  constructor(
    private _router: Router){}
 
  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['/']);
  }
 
  login(user_param){
    let authenticatedUser = this.Users.find(u => u.username === user_param.username);
    if (authenticatedUser && authenticatedUser.password === user_param.password){
      this.user = this.Users.find(u => u.username === user_param.username);      
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
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