import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../modals/Login';
import { UserRegistrationService } from '../user-registration.service';
import { Router } from '@angular/router';
import { ConstantsService } from '../constants.service';
import { User } from '../modals/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: User;
  public isAuthenticated: boolean;

  constructor(private userResgistrationService: UserRegistrationService, private router: Router, public constant: ConstantsService) { }

  ngOnInit() {
    this.constant.globalvariable = true;
    console.log(this.constant.globalvariable);

  }

  login(user: LoginUser) {

    this.userResgistrationService.authenticateUser(user).subscribe(
      (data) => {
        console.log(data);
        this.isAuthenticated = data;

        this.userResgistrationService.getUserByEmail(this.userResgistrationService.loginuser.username).
          subscribe((data) => {
            console.log(data);
            this.user = data;
            this.user.isAuthenticated = this.isAuthenticated;
            if (this.isAuthenticated && this.user.role == 'Surveyor') {
              this.router.navigateByUrl('survey');
            }
            else if (this.isAuthenticated && this.user.role == 'User') {
              this.router.navigateByUrl('landing');
            }
            else{
              alert("username and password does not match")
              this.router.navigateByUrl('');
            }
          })
      },
      (error) =>{ 
        alert("You are not a valid user")
        this.router.navigateByUrl('');
      })
  }
  signup() {
    this.router.navigateByUrl('sign-up');
  }
} 
