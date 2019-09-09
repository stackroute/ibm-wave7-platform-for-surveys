import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-response-analysis',
  templateUrl: './response-analysis.component.html',
  styleUrls: ['./response-analysis.component.scss']
})
export class ResponseAnalysisComponent implements OnInit {
  dataSource: Object; dataSource1: Object;

  ngOnInit(){}
  
  constructor() {
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
} 