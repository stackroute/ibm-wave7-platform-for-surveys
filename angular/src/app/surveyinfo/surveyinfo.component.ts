import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { Question } from '../modals/Question';
import { Survey } from '../modals/Survey';

@Component({
  selector: 'app-surveyinfo',
  templateUrl: './surveyinfo.component.html',
  styleUrls: ['./surveyinfo.component.scss']
})
export class SurveyinfoComponent implements OnInit {

  constructor(private surveyService : SurveyService) {   }

  result:String;
  private survey:Survey;

  private questionList : Question[];

  ngOnInit() {
    // this.survey=this.surveyService.editSurvey;
    console.log(localStorage.getItem('EditingSurveyId'));
    this.getQuestionList(localStorage.getItem('EditingSurveyId'));
    // this.survey.surveydata().subscribe(data=>{this.result=data;
    // console.log(this.result);});
  }
  
  getQuestionList(surveyId: string) {
    this.surveyService.getAllQuestions(surveyId).subscribe(
      (data) => {
      this.questionList = data.questionList;
        console.log("questions : ", this.questionList)
      })
  }
}


