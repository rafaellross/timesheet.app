import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { DataService } from '../../services/data.service';
import { User } from '../../classes/user';
import { TimeSheetGroup } from '../../classes/timesheetgroup';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  TimeSheetList: TimeSheetGroup[];
  user: User = new User(0, "", "", false);

  constructor(public dataService : DataService, private _service:AuthenticationService) {}

  ngOnInit(){
      
      this._service.checkCredentials();
      this.user = JSON.parse(localStorage.getItem("user")); 
      this.loadLastTimeSheets(this.user);
      
  }

  logout() {
      this._service.logout();
  }

  loadLastTimeSheets(user: User){    
    this.dataService.getLastTimeSheets(user).subscribe(data => this.TimeSheetList = data);           
  }

  
  
}
