
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Survey } from '../modals/Survey';
import { SurveyService } from '../survey.service';
import { Router } from '@angular/router';
import { AutofillMonitor } from '@angular/cdk/text-field';
import { FormControl } from '@angular/forms';
import { UserRegistrationService } from '../user-registration.service';
import { Observable } from 'rxjs';
import { Response } from '../modals/Response';

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

  private responseList : Response[] = []; 
  
  ngOnInit() {
    this.getSurveyorSurveysList();
    this.isLoggedOut$ = this.userRegistrationService.logOut;
    this.userRegistrationService.setLogout(true);
    this.isLoggedOut$.subscribe(data => {
      this.loggedOut = data;
      console.log(this.loggedOut);
    });
  }

  preview(survey) {
    localStorage.setItem('EditingSurveyId',survey.id);
    this.router.navigateByUrl('surveyinfo');
  }

  getResponseList() {
    this.surveyService.getResponseList().subscribe((data) => {
      this.responseList = data;
      console.log(this.responseList)
    })
  }

  getSurveyorSurveysList() {
    this.surveyService.getSurveysBySurveyor().subscribe(
      (data) => {
        if (data != null) {
          this.surveyList = data.surveysList
          console.log(this.surveyList)
          this.getResponseList();
          for(let i=0 ; i< this.surveyList.length ; i++)
          {
            console.log(this.responseList);
            console.log(this.surveyList[i].id);
             this.surveyList[i].respondants = this.responseList.filter(x => x.survey_id == this.surveyList[i].id).length
          }
        }
      })
  }

  deleteSurvey(survey) {
    console.log(survey);
    this.surveyService.deleteSurvey(survey).subscribe(data =>
    this.getSurveyorSurveysList()
    );
    this.getSurveyorSurveysList()
  }

  editQuestions(survey: Survey) {
    // this.surveyService.surveyId = survey.id;
    localStorage.setItem('EditingSurveyId',survey.id);
    // this.surveyService.editSurvey = survey
    this.router.navigate(['question-template', survey.id]);
  }

  analyze(survey: Survey) {
    localStorage.setItem('EditingSurveyId',survey.id);
    // this.surveyService.editSurvey = survey;
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
            // this.surveyService.editSurvey = data;
            localStorage.setItem('EditingSurveyId',data.id);
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
