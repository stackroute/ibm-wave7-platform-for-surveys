import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-publishedview',
  templateUrl: './publishedview.component.html',
  styleUrls: ['./publishedview.component.scss']
})
export class PublishedviewComponent implements OnInit {

  constructor(private surveyService : SurveyService) { }

  private publishedURL : string;

  ngOnInit() {
    this.publishedURL = this.surveyService.publishedURL;
  this.publishedURL.substring 
  }

}
