import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../modals/Login';
import { UserRegistrationService } from '../user-registration.service';
import { Router } from '@angular/router';
import { ConstantsService } from '../constants.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: LoginUser;

  constructor(private userResgistrationService: UserRegistrationService, private router : Router,public constant:ConstantsService) { }

  ngOnInit() {
    this.constant.globalvariable =true;
    console.log(this.constant.globalvariable);

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
