import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../classes/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  public user = new User("0", '','', false);
  public errorMsg = '';

  constructor(
      private _service:AuthenticationService) {}

  login(user: User) {
      if(!this._service.login(user)){
          this.errorMsg = 'Failed to login';
      }
  }
}
