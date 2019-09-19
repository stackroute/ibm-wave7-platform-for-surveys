import { Component, OnInit } from '@angular/core';
import { Question } from '../modals/Question';
import { SurveyService } from '../survey.service';
import { Datasource } from '../modals/Datasource';
import { Response } from '../modals/Response';

@Component({
  selector: 'app-response-analysis',
  templateUrl: './response-analysis.component.html',
  styleUrls: ['./response-analysis.component.scss']
})
export class ResponseAnalysisComponent implements OnInit {

  dataSource: any;
  width:string;
  height:string;
  dataSourceList: Datasource[] = [];
  questionChart: Datasource;
  private tempDatasource :any;
  private questionList: Question[];
  private responseList: Response[];
  private showChart: boolean = false;
  private OverallChart : boolean = false;
  private analyzeSurveyId : string;
  
  constructor(private surveyService: SurveyService) {
    this.width="100%";
    this.height="500";

  }

  ngOnInit() {
    this.analyzeSurveyId = localStorage.getItem('EditingSurveyId');
    console.log(this.analyzeSurveyId);
    this.loadDataSources();
    this.getResponseList();
  }

  getResponseList() {
    this.surveyService.getResponseList().subscribe((data) => {
      this.responseList = data.filter(x => x.survey_id == this.analyzeSurveyId);
      console.log(this.responseList)
      this.getQuestionList(this.analyzeSurveyId);
    })
  }

  getAnalysis(question: Question) {
    this.OverallChart =false; 
    this.showChart = true;
    console.log(this.dataSourceList);
    console.log(question);
    this.questionChart = this.dataSourceList.filter(x => x.chart.caption == question.questionTag)[0];
    console.log(this.questionChart); 
  }

  getQuestionList(surveyId: string) {
    this.surveyService.getAllQuestions(surveyId).subscribe(data => {
      this.questionList = data.questionList;
      console.log("questions : ", this.questionList);
      for (let i = 0; i < this.questionList.length; i++) {
        let question = this.questionList[i];
        this.loadDataSources();
        this.tempDatasource.chart.caption = question.questionTag;
        this.tempDatasource.chart.subCaption = "Which option is most answered";
        this.tempDatasource.chart.xAxisName = "Options";
        this.tempDatasource.chart.yAxisName = "No of users opted";
        this.tempDatasource.chart.theme = "fusion";
        for (let j = 0; j < question.choices.length; j++) {
          this.tempDatasource.data[j].label = question.choices[j];
         this.tempDatasource.data[j].value =
            this.responseList.filter(x => x.question_id == question.questionId && x.response == question.choices[j] && x.survey_id == this.analyzeSurveyId).length.toString();
        }
        this.dataSourceList.push(this.tempDatasource);
        this.tempDatasource=null;
      }
      console.log(this.dataSourceList);
    });
  }

  loadDataSources() {
    this.tempDatasource = {
      chart: {
        caption: "How easy or difficult was it to schedule your appointment at a time that was conveninent for you?",
        subCaption: "Which option is most answered",
        xAxisName: "Options",
        yAxisName: "No of users opted",
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
