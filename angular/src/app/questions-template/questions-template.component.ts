import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions-template',
  templateUrl: './questions-template.component.html',
  styleUrls: ['./questions-template.component.scss']
})
export class QuestionsTemplateComponent implements OnInit {

  private condition : boolean;

  private choiceVisibility : boolean;

  private count : number;

  constructor() { }

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

}
