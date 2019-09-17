import { Component, OnInit } from '@angular/core';
import { Question } from '../modals/Question';
import { SurveyService } from '../survey.service';
import { Datasource } from '../modals/Datasource';
import { Response } from '../modals/Response';
import { from } from 'rxjs/observable/from';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';


@Component({
  selector: 'app-response-analysis',
  templateUrl: './response-analysis.component.html',
  styleUrls: ['./response-analysis.component.scss']
})
export class ResponseAnalysisComponent implements OnInit {

  dataSource: any;
  dataSourceList: Datasource[] = [];
  questionChart: Datasource;
  private tempDatasource :any;
  private questionList: Question[];
  private responseList: Response[];
  private showChart: boolean = false;
  private OverallChart : boolean = false;
  
  constructor(private surveyService: SurveyService) {

  }

  ngOnInit() {
    console.log(this.surveyService.editSurvey.id);
   
    this.loadDataSources();
    this.getResponseList();
  }

  getResponseList() {
    this.surveyService.getResponseList().subscribe((data) => {
      console.log(data)
      this.responseList = data;
      this.getQuestionList(this.surveyService.editSurvey.id);
      //this.responseList

      // const result = from(this.responseList).pipe(
      //   groupBy(x => x.question_id, x => x.response),
      //   // return each item in group as array
      //   mergeMap(group => group.count)
      // );
      // const subscribe = result.subscribe(val => console.log(val));
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
    console.log("tempSource ..................",this.tempDatasource);
    this.surveyService.getAllQuestions(surveyId).subscribe(data => {
      this.questionList = data.questionList;
      console.log("questions : ", this.questionList);
      for (let i = 0; i < this.questionList.length; i++) {
        let question = this.questionList[i];
        this.loadDataSources();
        console.log("Question is............................",question)
        console.log("tempSource ..................", this.tempDatasource);
        this.tempDatasource.chart.caption = question.questionTag;
        this.tempDatasource.chart.subCaption = "Which option is most answered";
        this.tempDatasource.chart.xAxisName = "Options";
        this.tempDatasource.chart.yAxisName = "no of users opted";
        this.tempDatasource.chart.theme = "fusion";
        console.log("tempSource ..................", this.tempDatasource);
        for (let j = 0; j < question.choices.length; j++) {
          this.tempDatasource.data[j].label = question.choices[j];
         this.tempDatasource.data[j].value =
            this.responseList.filter(x => x.question_id == question.questionId && x.response == question.choices[j] && x.survey_id == question.survey_id).length.toString();
        }
        console.log("tempSource ..................", this.tempDatasource);

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
