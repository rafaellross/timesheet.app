import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../classes/user';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _service:AuthenticationService) {}
  
  user: User;
  ngOnInit() {    
    if(localStorage.getItem("user") != null){
      this.user = JSON.parse(localStorage.getItem("user"));
    }        
  }

}
