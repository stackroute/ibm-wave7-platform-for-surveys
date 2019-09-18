import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { User } from '../modals/User';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-reward-points',
  templateUrl: './reward-points.component.html',
  styleUrls: ['./reward-points.component.scss']
})

export class RewardPointsComponent implements OnInit {

  private respondent : User;

  constructor( 
    private router : Router,
    private userRegistrationService : UserRegistrationService
  ) { }

  ngOnInit() {
    this.userRegistrationService.getTargetUserById(localStorage.getItem('loggedInUserId'))
          .subscribe((data) => {
            this.respondent = data
          })
  }
  
  reward() {
      this.router.navigateByUrl("");
  }
}
