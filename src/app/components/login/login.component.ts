import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../classes/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  public user = new User('','', false);
  public errorMsg = '';

  constructor(
      private _service:AuthenticationService) {}

  login() {
      if(!this._service.login(this.user)){
          this.errorMsg = 'Failed to login';
      }
  }
}
