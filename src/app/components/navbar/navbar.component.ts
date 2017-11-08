import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../classes/user';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _service:AuthenticationService) {}
  
  user: User;
  isLoggedIn$: Observable<boolean>; 
  ngOnInit() {    
    this.isLoggedIn$ = this._service.loggedIn;    
    this.user = JSON.parse(localStorage.getItem("user")); 
    if(this.user !== null){
      this.isLoggedIn$ = new BehaviorSubject<boolean>(true);
    }
    
  }

  logout(){
    this._service.logout();
  }

}
