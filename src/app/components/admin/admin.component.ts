import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private _service:AuthenticationService){}

  ngOnInit(){
      this._service.checkCredentials();
      if(localStorage.getItem("user") === null || !JSON.parse(localStorage.getItem("user")).administrator){
        this._service.logout();
      }
  }


}
