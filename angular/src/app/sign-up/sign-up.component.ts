import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../modals/User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public user:User
  constructor(private registrationService: UserRegistrationService,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  saveUser(user: User) {
    console.log(user);
    this.registrationService.saveUser(user).subscribe((data)=> {
       this.user = data;
      console.log("result is ", user);
    });
  }
}