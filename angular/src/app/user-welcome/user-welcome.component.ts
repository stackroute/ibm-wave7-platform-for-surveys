import { Component, OnInit } from '@angular/core';
import { User } from '../modals/User';
import { UserRegistrationService } from '../user-registration.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Guid } from 'guid-typescript';
import { QuestionsComponent } from '../questions/questions.component';

@Component({
  selector: 'app-user-welcome',
  templateUrl: './user-welcome.component.html',
  styleUrls: ['./user-welcome.component.scss']
})
export class UserWelcomeComponent implements OnInit {

  constructor(private userRegistration:UserRegistrationService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  user:User;
  id:string;

  ngOnInit() {

  }
  onClick(email)
{
  console.log(email);
  this.userRegistration.email=email;
  this.userRegistration.saveUserEmail(email).subscribe((id) => 
  {
  id=id;
  });




  
  // this.id=Guid.create().toString();
}
}
