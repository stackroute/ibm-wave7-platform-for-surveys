import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../modals/Login';
import { UserRegistrationService } from '../user-registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: LoginUser;

  constructor(private userResgistrationService: UserRegistrationService, private router : Router) { }

  ngOnInit() {
  }

  login(user: LoginUser) {

    this.router.navigateByUrl('survey');
    // this.userResgistrationService.authenticateUser(user).subscribe(
    //   (data) => {
    //     console.log(data);
    //   })
  }

  signup()
  {
    this.router.navigateByUrl('sign-up');
  }
}
