import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { SurveyService } from '../survey.service';
import { Question } from '../modals/Question';
import { Response } from '../modals/Response';
import { Survey } from '../modals/Survey';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  num;
  response:Response;
  
  id: [];
  private survey:Survey;

  private questionList: Question[];
  private responseList : Response[] = [];
  private respondents:number;
  private surveyId : string;
  constructor(private router: Router, private surveyService: SurveyService, private route: ActivatedRoute) { }

  ngOnInit() {
    let surveyId = this.route.snapshot.paramMap.get('surveyId');
    console.log(surveyId);
    this.getQuestionList(surveyId);
    // this.surveyService.expiryCheck().subscribe(
    //   (num) => {
    //   this.num = num;
    //     console.log(window.location.href)
    //   });
    // this.surveyId = this.route.snapshot.paramMap.get('surveyId');
    // this.getQuestionList(this.surveyId);
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

  saveResponse(questionList: Question[]) {
    // console.log(questionList);

    //  this.response.randomNum=Math.floor(Math.random()*100)+50;
    //  console.log(this.response.randomNum);
    
      for (let i = 0; i < questionList.length; i++) {
        let question = questionList[i]
        let response : Response = {
          question_id: "",
          response: "",
          user_id: "",
          survey_id: "",
          randomNum:0
        }

        response.question_id = question.questionId;
        response.response = question.response;
        response.survey_id = this.surveyId;
        response.user_id = this.surveyService.targetUser.id;
        // this.respondents++;
        this.responseList.push(response);
      }

      this.surveyService.saveResponseList(this.responseList)
      .subscribe(
        data => {
          console.log("saved response" + data);
        }, 
        error => {
          alert("error=" + error);
        });
      // if(this.survey.respondants<=this.respondents && this.survey.expiryDate<="1")
      // {
      //   // this.surveyService.sendMail(url);
      // }
  }

  newSurveys() {
    this.surveyService.getRelatedSurveys().subscribe((id: []) => { this.id = id; })
  }

}

