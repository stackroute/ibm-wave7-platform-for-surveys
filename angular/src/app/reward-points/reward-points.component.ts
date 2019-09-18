import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { User } from '../modals/User';
import { UserRegistrationService } from '../user-registration.service';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-reward-points',
  templateUrl: './reward-points.component.html',
  styleUrls: ['./reward-points.component.scss']
})
export class RewardPointsComponent implements OnInit {

  private respondent : User;

  constructor(
    private surveyService : SurveyService,
    private router : Router
  ) { }

  ngOnInit() {
    this.respondent = this.surveyService.targetUser;
  }
  
  reward() {
      this.router.navigateByUrl("");
  }
}
