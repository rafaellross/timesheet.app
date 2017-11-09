import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { User } from '../../../classes/user';
import {FormControl} from '@angular/forms';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  users: User[];
  userType: string;
  UserId: any;
  

  constructor(
    private route: ActivatedRoute, 
    public dataService : DataService, 
    private _service:AuthenticationService, 
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this._service.checkCredentials();
    
    this.route.params.subscribe(params => {
      this.UserId = params['user-id'];          
    });    
    this.getUserById(this.UserId);
    
  }

  getUserById(id: string){
    this.dataService.getUserById(id)
    .subscribe(
      data => {        
        this.loadUser(data)
      },
      err => {
        return false;
      }
    );    
        
  }

  loadUser(user: User[]){
    this.users = user;
    this.userType = this.users[0].administrator ? "1" : "0";
    console.log("load user");
    console.log(this.users);
  }

  save(user: User, passwordConfirm: string){
   /* 
    if(user.password !== passwordConfirm){
      this.openSnackBar("Passords doesn't match", "OK");
    } else {
*/

      if(!this.dataService.saveUser(user)){
        alert("User " + user.name + " modified with success");
        document.location.href = "#/users/view";
      } else {     
        alert("One error occurred on update user" + user.name + "!");
      }

    
  }
  
    openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 3000,
      });
    }

}
