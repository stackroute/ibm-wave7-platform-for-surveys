import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  constructor(private router : Router,private survey:SurveyService) { }
  num;
  ngOnInit() {
  this.survey.expiryCheck().subscribe(
    (num) =>
    {this.num=num;
      console.log(window.location.href)
  });

   
  }
  submit()
  {
    this.router.navigateByUrl('thankyou')
  }

  newSurveys()
  {
    
  }

  
}
