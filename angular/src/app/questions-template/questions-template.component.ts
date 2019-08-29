import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../modals/Question';

@Component({
  selector: 'app-questions-template',
  templateUrl: './questions-template.component.html',
  styleUrls: ['./questions-template.component.scss']
})
export class QuestionsTemplateComponent implements OnInit {

  private condition : boolean;

  private choiceVisibility : boolean;

  private count : number;
  private question:Question;

  constructor(private surveyService:SurveyService,private route:ActivatedRoute) { }

  ngOnInit() {
  }

  addQuestion()
  {
    this.condition = true;
    console.log(this.condition);
    this.count++;
  }

  addChoice()
  {
      this.choiceVisibility = true;
  }
  saveQuestion(question:Question) {
    this.surveyService.saveQuestion(question).subscribe((data)=> {
    this.question = data;
   console.log("result is ", question);
 });
}
}
