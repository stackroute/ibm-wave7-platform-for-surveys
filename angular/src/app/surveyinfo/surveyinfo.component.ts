import { Component, OnInit } from '@angular/core';
import { SurveycardService } from '../surveycard.service';

@Component({
  selector: 'app-surveyinfo',
  templateUrl: './surveyinfo.component.html',
  styleUrls: ['./surveyinfo.component.scss']
})
export class SurveyinfoComponent implements OnInit {

  constructor(private survey:SurveycardService) {   }

  result:String;
  ngOnInit() {
  
    this.survey.surveydata().subscribe(data=>{this.result=data;
    console.log(this.result);});
  }
  

}
