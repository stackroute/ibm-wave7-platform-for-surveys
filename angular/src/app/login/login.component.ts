import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../modals/Login';
import { UserRegistrationService } from '../user-registration.service';
import { Router } from '@angular/router';
import { ConstantsService } from '../constants.service';
import { User } from '../modals/User';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: User;
  public isAuthenticated: boolean;
  isLoggedIn$:Observable<boolean>;
  loggedIn: boolean;
  isLoggedOut$:Observable<boolean>;
  loggedOut: boolean;


  constructor(private userResgistrationService: UserRegistrationService, private router: Router, public constant: ConstantsService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.userResgistrationService.logged;
    this.userResgistrationService.setLogin(false);
    this.isLoggedIn$.subscribe(data => {
      this.loggedIn = data;
      console.log(this.loggedIn);
    });
    this.isLoggedOut$ = this.userResgistrationService.logOut;
    this.userResgistrationService.setLogout(false);
    this.isLoggedOut$.subscribe(data => {
      this.loggedOut = data;
      console.log(this.loggedOut);
    });

  }
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);
  passwordFormControl = new FormControl("", [Validators.required]);
  loginForm: FormGroup = new FormGroup({
    email: this.emailFormControl,
    password: this.passwordFormControl,
  });
  getRequiredErrorMessage()
  {
    return this.emailFormControl.hasError("required")
    ? "You must enter a value"
    : this.emailFormControl.hasError("username")
    ? "Not a valid email"
    : "";
  }
   getPasswordErrorMessage(field) {
    return this.loginForm.get(field).hasError("required")
      ? "You must enter a value"
      : "";
  }
  login(user: LoginUser) {

    this.userResgistrationService.authenticateUser(user).subscribe(
      (data) => {
        console.log(data);
        this.isAuthenticated = data;

        this.userResgistrationService.getUserByEmail(this.userResgistrationService.loginuser.email).
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
