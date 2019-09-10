import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SurveyService } from '../survey.service';
import { Question } from '../modals/Question';
import { parse } from 'querystring';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  private questionList: Question[];
  constructor(private router: Router, private surveyService: SurveyService, private route: ActivatedRoute) { }

  ngOnInit() {
    let surveyId = this.route.snapshot.paramMap.get('surveyId');
    this.getQuestionList(surveyId);
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

  //   for (let i = 0; i < responseList.length; i++) {
      
  //     this.surveyService.saveResponse(responseList[i])
  //       .subscribe(
  //         data => {
  //         },
  //         error => {
  //           alert("error=" + error);
  //         });
  //   }
  }
}