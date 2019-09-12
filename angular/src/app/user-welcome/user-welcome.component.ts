import { Component, OnInit } from '@angular/core';
import { User } from '../modals/User';
import { UserRegistrationService } from '../user-registration.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-user-welcome',
  templateUrl: './user-welcome.component.html',
  styleUrls: ['./user-welcome.component.scss']
})
export class UserWelcomeComponent implements OnInit {

  constructor(private userRegistration:UserRegistrationService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  user:User;
  id:string;

  ngOnInit() {

  }
  onClick(email)
{
  // this.user={'email':email,};
  this.router.navigateByUrl('questions/:surveyId');
  // this.id=Guid.create().toString();
  this.userRegistration.saveUserEmail(email).subscribe();
}
}
