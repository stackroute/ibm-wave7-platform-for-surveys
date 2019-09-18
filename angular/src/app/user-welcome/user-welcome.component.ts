import { Component, OnInit } from "@angular/core";
import { User } from "../modals/User";
import { UserRegistrationService } from "../user-registration.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { SurveyService } from '../survey.service';

@Component({
  selector: "app-user-welcome",
  templateUrl: "./user-welcome.component.html",
  styleUrls: ["./user-welcome.component.scss"]
})

export class UserWelcomeComponent implements OnInit {
  constructor(
    private userRegistration: UserRegistrationService,
    private router: Router,
    private route: ActivatedRoute,
    private surveyService: SurveyService
  ) { }

  private user: User;
  private surveyId: string;
  private email: string;

  ngOnInit() {
    this.surveyId = this.route.snapshot.paramMap.get('surveyId');
    console.log(this.surveyId);
  }

  takeSurvey() {
    console.log(this.email);
    // this.userRegistration.email = email;
    this.userRegistration.saveUserEmail(this.email).subscribe(
      (data) => {
        console.log(data);
        // this.surveyService.targetUser = data;
        localStorage.removeItem('loggedInUserId');
        localStorage.setItem('loggedInUserId',data.id);
        localStorage.setItem('respondentEmail', data.email);
      });
      console.log(this.surveyId);
      this.router.navigate(['questions', this.surveyId]);
    // this.userRegistration.email = this.email;
    //     this.userRegistration.saveUserEmail(this.email).subscribe(
    //       (data) => {
    //         this.user = data
    //         console.log(data);
    //         this.surveyService.targetUser = data;
    //         this.router.navigate(['questions',this.surveyId]);
    //       });
    //   }
  }
}
