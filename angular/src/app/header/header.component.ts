import { Component, OnInit } from "@angular/core";
import { ConstantsService } from "../constants.service";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  isLoggedIn$:Observable<boolean>;
  loggedIn: boolean;
  isLoggedOut$:Observable<boolean>;
  loggedOut: boolean;
  // public url: string = "http://localhost:4200/login";
  constructor(private userRegistrationService:UserRegistrationService, private router: Router,) {}

  ngOnInit() {
    this.isLoggedIn$ = this.userRegistrationService.logged;
    this.isLoggedIn$.subscribe(data => {
      this.loggedIn = data;
    });
    this.isLoggedOut$ = this.userRegistrationService.logOut;
    this.isLoggedOut$.subscribe(data => {
      this.loggedOut = data;
    });
  }

  login() {
    this.router.navigateByUrl("login");
  }

  logOut()
  {
    localStorage.removeItem('loggedInUserId');
    localStorage.removeItem('loggedInUserRole');
    localStorage.removeItem('respondentEmail');
    this.router.navigateByUrl('');
  }

  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  myprofile() {
    if(localStorage.getItem('loggedInUserRole') == "Surveyor"){
      this.router.navigateByUrl("myprofile");
      }
      else
      {
        this.router.navigateByUrl("userprofile");
      }
  }

  support() {
    this.router.navigateByUrl("support");
  }
}
