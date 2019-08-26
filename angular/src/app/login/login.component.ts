import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../modals/Login';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: LoginUser;

  constructor(private userResgistrationService: UserRegistrationService) { }

  ngOnInit() {
  }

  login(user: LoginUser) {
    this.userResgistrationService.authenticateUser(user).subscribe(
      (data) => {
        console.log(data);
      })
  }
}
