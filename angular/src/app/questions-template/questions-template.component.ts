import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../modals/Question';
import { Survey } from '../modals/Survey';
import { MatInput } from '@angular/material';


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
  private survey:Survey;
  // private questionList:Question[];
  questionList;
  constructor(private surveyService:SurveyService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.getQuestionList(this.survey);
  }

  addQuestion()
  {
    // this.condition = true;
    // console.log(this.condition);
    // this.count++;
      var form = document.getElementById('questionForm');
      var questionCard = document.getElementsByName('question_card').item(0);
      var newElement = document.createElement('mat-card');
      // newElement.innerHTML = questionCard.innerHTML;
      newElement.innerHTML = `<mat-form-field>
        <textarea matInput placeholder="Question"></textarea>
        </mat-form-field>
        <mat-form-field name="choice" class="choice">
          <input matInput placeholder="Choice">
        </mat-form-field>
        <button id = "addChoice" mat-mini-fab color="primary" (click)=addChoice($event)>+</button>`;

      console.log(newElement.innerHTML);
      // newElement.innerHTML = '<input placeholder="Choice">';
      // newElement.setAttribute('matInput','true');
      // newElement.classList.add('choice');
      // questionCard.appendChild(newElement);
      form.insertBefore(newElement, document.getElementById('submitButton'));
  }

  addChoice(event)
  {
    console.log(event);
      // this.choiceVisibility = true;
      var questionCard = document.getElementsByName('question_card').item(0);
      var element = document.getElementsByName('choice').item(0);
      var newElement = document.createElement('mat-form-field');
      // newElement.innerHTML = element.innerHTML;
      newElement.innerHTML = '<input placeholder="Choice">';
      // newElement.setAttribute('matInput','true');
      newElement.classList.add('choice');
      // questionCard.appendChild(newElement);
      questionCard.insertBefore(newElement, document.getElementById('addChoice'));
  }
  saveQuestion(question:Question) {
    this.surveyService.saveQuestion(question).subscribe((data)=> {
    this.question = data;
   console.log("result is ", question);
 });
}
getQuestionList(survey:Survey)
{
  this.surveyService.getAllQuestions(survey).subscribe(
    (data) => {this.questionList=data;
    console.log("questions : ",this.questionList)
    })
}
}
