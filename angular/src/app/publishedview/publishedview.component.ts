import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { ActivatedRoute, RouterEvent, Router } from '@angular/router';

@Component({
  selector: 'app-publishedview',
  templateUrl: './publishedview.component.html',
  styleUrls: ['./publishedview.component.scss']
})
export class PublishedviewComponent implements OnInit {

  constructor(private surveyService : SurveyService,private route:ActivatedRoute,private router :Router) { }

  private publishedURL : String;
  private emailIds : string [];

  ngOnInit() {
    this.publishedURL = this.surveyService.publishedURL;
    this.emailIds=this.surveyService.emailIds;
  }

  getSurveyId()
  {
    // let surveyId=this.route.snapshot.queryParams["surveyId"];
    let surveyId=this.route.snapshot.paramMap.get('surveyId');
    console.log(surveyId);
    this.router.navigate(['user-welcome',surveyId]);
  }

  
}
