
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Survey } from '../modals/Survey';
import { SurveyService } from '../survey.service';
import { Router } from '@angular/router';
import { AutofillMonitor } from '@angular/cdk/text-field';
import { FormControl } from '@angular/forms';
import { UserRegistrationService } from '../user-registration.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-survey-card',
  templateUrl: './my-survey-card.component.html',
  styleUrls: ['./my-survey-card.component.scss']
})
export class MySurveyCardComponent implements OnInit {

  isLoggedOut$: Observable<boolean>;
  loggedOut: boolean;

  constructor(private userRegistrationService: UserRegistrationService, private dialog: MatDialog, private surveyService: SurveyService, private router: Router) { }

  public surveyList: Survey[];

  ngOnInit() {
    console.log("local storage ", localStorage.getItem('loggedInUser'));
    this.getSurveyorSurveysList();
    this.isLoggedOut$ = this.userRegistrationService.logOut;
    this.userRegistrationService.setLogout(true);
    this.isLoggedOut$.subscribe(data => {
      this.loggedOut = data;
      console.log(this.loggedOut);
    });
  }

  preview(survey) {
    this.surveyService.surveyId = survey.id;
    this.router.navigateByUrl('surveyinfo');
  }

  // getSurveyList() {
  //   this.surveyService.getAllSurveys().subscribe(
  //     (data) => {
  //       this.surveyList = data
  //       console.log(this.surveyList)
  //     })
  // }

  getSurveyorSurveysList() {
    this.surveyService.getSurveysBySurveyor().subscribe(
      (data) => {
        if (data != null) {
          this.surveyList = data.surveysList
          console.log(this.surveyList)
        }
      })
  }

  deleteSurvey(survey) {
    console.log(survey);
    this.surveyService.deleteSurvey(survey).subscribe(data =>
    this.getSurveyorSurveysList()
    );
  }

  editQuestions(survey: Survey) {
    this.surveyService.surveyId = survey.id;
    this.surveyService.editSurvey = survey
    this.router.navigate(['question-template', survey.id]);
  }

  analyze(survey: Survey) {
    this.surveyService.editSurvey = survey;
    this.router.navigateByUrl('analysis');
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateSurveyDialogue,
      {
        width: '300px',
        height: 'auto',
        data: {}
      });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        console.log(result);
        this.surveyService.createSurvey(result).subscribe(
          (data) => {
            console.log(data);
            this.surveyService.editSurvey = data;
            this.router.navigate(['question-template', data.id]);
            this.getSurveyorSurveysList();
          })
      }
    });
  }
}

@Component({
  selector: 'create-survey-dialogue',
  templateUrl: 'create-survey-dialogue.html',
})

export class CreateSurveyDialogue {

  constructor(

    public dialogRef: MatDialogRef<CreateSurveyDialogue>,
    @Inject(MAT_DIALOG_DATA) public data: Survey) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  location = new FormControl();

  locationList: string[] = ['Bangalore', 'Hyderabad', 'Chennai', 'Delhi', 'Pune'];
}
