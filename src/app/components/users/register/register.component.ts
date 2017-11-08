import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../classes/user';
import { DataService } from '../../../services/data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User(null, "", "", false);
    
  constructor(private dataService:DataService) {}

  ngOnInit() {
  }

  register(): void {
    if(!this.dataService.saveUser(this.user)){
      alert("User " + this.user.name + " modified with success");
      document.location.href = "#/users/view";
    } else {     
      alert("One error occurred on update user" + this.user.name + "!");
    }

  }

  

}
