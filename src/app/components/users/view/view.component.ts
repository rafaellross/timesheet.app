import { Component, OnInit } from '@angular/core';
import { User } from '../../../classes/user';
import { DataService } from '../../../services/data.service';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  SearchList: User[] = [];
  constructor(public dataService : DataService,  private _service:AuthenticationService) {}

  ngOnInit() {
    this.search();
  }

  search(){
    this.dataService.getUser(null)
        .subscribe(data => this.SearchList = data);           
  }

}
