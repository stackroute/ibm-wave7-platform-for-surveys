import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from '../survey.service';
import { Question } from '../modals/Question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  private questionList: Question[];
  constructor(private router : Router,    private surveyService: SurveyService,) { }

  ngOnInit() {
   this.getQuestionList("12ca6f52-4ce8-00d7-48e3-ba09557801ee");
  }
  submit()
  {
    this.router.navigateByUrl('thankyou')
  }
  getQuestionList(surveyId: string) {
    console.log("questions : ", this.questionList);
    this.surveyService.getAllQuestions(surveyId).subscribe(data => {
      this.questionList = data.questionList;
      console.log("questions : ", this.questionList);
    });
  }
}

