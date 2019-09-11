import { Component, OnInit } from '@angular/core';
import { Question } from '../modals/Question';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-response-analysis',
  templateUrl: './response-analysis.component.html',
  styleUrls: ['./response-analysis.component.scss']
})
export class ResponseAnalysisComponent implements OnInit {
  dataSource: Object; dataSource1: Object;
  private questionList: Question[];

  

 
  
  constructor(private surveyService: SurveyService,) {
    this.dataSource = {
      chart: {
        caption: "How easy or difficult was it to schedule your appointment at a time that was conveninent for you?",
        subCaption: "Which option is most answered",
        xAxisName: "Options",
        yAxisName: "no of users opted",

        theme: "fusion"
      },
      // Chart Data
      data: [
        {
          label: "Very Easy",
          value: "10"
        },
        {
          label: "Some What Difficult",
          value: "5"
        },
        {
          label: "Some what easy",
          value: "3"
        },
        {
          label: "Very difficult",
          value: "2"
        },

        {
          label: "Neither easy nor difficult",
          value: "0"
        }

      ]

    };
    this.dataSource1 = {
      chart: {
        caption: "How often do you visit One Plus Store?",
        subCaption: "Which option is most answered",
        xAxisName: "Options",
        yAxisName: "no of users opted",

        theme: "fusion"
      },
      // Chart Data
      data: [
        {
          label: "Once in a month",
          value: "3"
        },
        {
          label: "Once in a year",
          value: "100"
        },
        {
          label: "Once in a month",
          value: "3"
        },
        {
          label: "Once in a day",
          value: "2"
        }



      ]
    };
  }
  ngOnInit(){
    console.log(this.surveyService.surveyId);
    this.getQuestionList("fbc97b14-5269-6a2c-fc2a-9bc39b21d2a4");
  }
  getQuestionList(surveyId: string) {
    console.log(surveyId);
    this.surveyService.getAllQuestions(surveyId).subscribe(data => {
      this.questionList = data.questionList;
      console.log("questions : ", this.questionList);
    });
  }
} 