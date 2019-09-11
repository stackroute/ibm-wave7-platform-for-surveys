import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { SurveyService } from '../survey.service';
import { Question } from '../modals/Question';
import { Response } from '../modals/Response';
import { parse } from 'querystring';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  num;
  id: [];

  private questionList: Question[];
  constructor(private router: Router, private surveyService: SurveyService, private route: ActivatedRoute) { }

  ngOnInit() {
    let surveyId = this.route.snapshot.paramMap.get('surveyId');
    this.getQuestionList(surveyId);
    this.surveyService.expiryCheck().subscribe(
      (num) => {
      this.num = num;
        console.log(window.location.href)
      });
  }

  submit() {
    this.router.navigateByUrl('thankyou')
  }

  getQuestionList(surveyId: string) {
    this.surveyService.getAllQuestions(surveyId).subscribe(data => {
      this.questionList = data.questionList;
      console.log("questions : ", this.questionList);
    });
  }

  saveResponse(responseList: Question[]) {
    console.log(responseList);

      for (let i = 0; i < responseList.length; i++) {

        let question = responseList[i]
        let response : Response
        response.question_id = question.questionId;
        response.response = question.response;
        response.servey_id = question.survey_id;
        response.user_id = this.surveyService.loginCredentials.id;
        
        this.surveyService.saveResponse(response)
          .subscribe(
            data => {
              console.log(data);
            },
            error => {
              alert("error=" + error);
            });
      }
  }

  newSurveys() {
    this.surveyService.getRelatedSurveys().subscribe((id: []) => { this.id = id; })
  }

}

