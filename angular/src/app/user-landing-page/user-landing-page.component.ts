import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRegistrationService } from '../user-registration.service';
import { Router } from '@angular/router';
import { SurveyService } from '../survey.service';
import { Survey } from '../modals/Survey';

@Component({
  selector: 'app-user-landing-page',
  templateUrl: './user-landing-page.component.html',
  styleUrls: ['./user-landing-page.component.scss']
})
export class UserLandingPageComponent implements OnInit {

  isLoggedOut$:Observable<boolean>;
  loggedOut: boolean;
  public surveyList : Survey[];

  constructor(private userRegistrationService:UserRegistrationService,private router:Router,private surveyService : SurveyService) { 
    this.isLoggedOut$ = this.userRegistrationService.logOut;
    this.userRegistrationService.setLogout(true);
    this.isLoggedOut$.subscribe(data => {
      this.loggedOut = data;
      console.log(this.loggedOut);
    });
  }

  ngOnInit() {
    this.getSurveyList();
  }
  
  getSurveyList()
  {
    this.surveyService.getAllSurveys().subscribe(
      (data) => {
        this.surveyList = data.filter(x => x.status == "Open")
      console.log(this.surveyList)
      })
  }
  
  takeSurvey(survey : Survey)
  {
    this.router.navigate(["questions",survey.id]);
  }

}
