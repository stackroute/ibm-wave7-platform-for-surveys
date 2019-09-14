import { Component, OnInit } from '@angular/core';
import { Question } from '../modals/Question';
import { SurveyService } from '../survey.service';
import { Datasource } from '../modals/Datasource';

@Component({
  selector: 'app-response-analysis',
  templateUrl: './response-analysis.component.html',
  styleUrls: ['./response-analysis.component.scss']
})
export class ResponseAnalysisComponent implements OnInit {

  dataSource: any;
  dataSourceList: Datasource[] = [];
  private questionList: Question[];

  constructor(private surveyService: SurveyService) { }

  ngOnInit() {
    console.log(this.surveyService.surveyId);
    this.getQuestionList(this.surveyService.editSurvey.id);
    this.loadDataSources();
  }

  getQuestionList(surveyId: string) {
    console.log(surveyId);
    this.surveyService.getAllQuestions(surveyId).subscribe(data => {
      this.questionList = data.questionList;
      console.log("questions : ", this.questionList);
      for (let i = 0; i < this.questionList.length; i++) {
        let question = this.questionList[i];
        this.dataSourceList[i] = this.dataSource;
        this.dataSourceList[i].chart.caption = question.questionTag;
        this.dataSourceList[i].chart.subCaption = "Which option is most answered";
        this.dataSourceList[i].chart.xAxisName = "Options";
        this.dataSourceList[i].chart.yAxisName = "no of users opted";
        this.dataSourceList[i].chart.theme = "fusion";
        for (let j = 0; j < question.choices.length; j++) {
          this.dataSourceList[i].data[i].label = question.choices[i];
          this.dataSourceList[i].data[i].value = j.toString();
        }
      }
    });
  }

  loadDataSources() {
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
          label: "",
          value: ""
        },
        {
          label: "",
          value: ""
        },
        {
          label: "",
          value: ""
        },
        {
          label: "",
          value: ""
        },
        {
          label: "",
          value: ""
        }
      ]
    };
  }
}
