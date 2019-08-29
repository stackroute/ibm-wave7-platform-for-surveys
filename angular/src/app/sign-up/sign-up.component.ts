import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../modals/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public user:User
  

  constructor(private registrationService: UserRegistrationService,
    private route: ActivatedRoute,  private router : Router) { }

  ngOnInit() {
  }
  saveUser(user:User) {
       this.registrationService.saveUser(user).subscribe((data)=> {
       this.user = data;
      console.log("result is ", user);
      alert("Account successfully created")
      this.router.navigateByUrl('login');
    });
  }
}
