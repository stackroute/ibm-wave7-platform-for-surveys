import { Component, OnInit, Inject } from '@angular/core';
import { SurveyService } from '../survey.service';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../modals/Question';
import { Survey } from '../modals/Survey';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-questions-template',
  templateUrl: './questions-template.component.html',
  styleUrls: ['./questions-template.component.scss']
})
export class QuestionsTemplateComponent implements OnInit {

  private condition: boolean;

  private choiceVisibility: boolean;
  private count: number;
  private question: Question;
  private survey: Survey;
  private questionList:Question[];
  private newchoices : string[] = [];


  constructor(private surveyService: SurveyService, private route: ActivatedRoute,
    private dialog : MatDialog) { }

  ngOnInit() {

    this.getQuestionList(this.surveyService.surveyId);
  }

  addQuestion() {
    this.condition = true;
    // console.log(this.condition);
    // this.count++;
    // var form = document.getElementById('questionForm');
    // var questionCard = document.getElementsByName('question_card').item(0);
    // var newElement = document.createElement('mat-card');
    // // newElement.innerHTML = questionCard.innerHTML;
    // newElement.innerHTML = `<mat-form-field>
    //     <textarea matInput placeholder="Question"></textarea>
    //     </mat-form-field>
    //     <mat-form-field name="choice" class="choice">
    //       <input matInput placeholder="Choice">
    //     </mat-form-field>
    //     <button id = "addChoice" mat-mini-fab color="primary" (click)=addChoice($event)>+</button>`;

    // console.log(newElement.innerHTML);
    // // newElement.innerHTML = '<input placeholder="Choice">';
    // // newElement.setAttribute('matInput','true');
    // // newElement.classList.add('choice');
    // // questionCard.appendChild(newElement);
    // form.insertBefore(newElement, document.getElementById('submitButton'));
  }

  addChoice(choiceText : string) {

    this.newchoices.push(choiceText);
    choiceText
    // console.log(event);
    // this.choiceVisibility = true;
    // var questionCard = document.getElementsByName('question_card').item(0);
    // // var element = document.getElementsByName('choice').item(0);
    // var newElement = document.createElement('mat-form-field');
    // // newElement.innerHTML = element.innerHTML;
    // newElement.innerHTML = '<input placeholder="Choice">';
    // // newElement.setAttribute('matInput','true');
    // newElement.classList.add('choice');
    // // questionCard.appendChild(newElement);
    // questionCard.insertBefore(newElement, document.getElementById('addChoice'));
  }

  saveQuestion(question: Question) {
    question.choices = this.newchoices;
    console.log("questin from ts",question);
    this.surveyService.saveQuestion(question).subscribe((data) => {
      this.question = data;
      console.log("result is ", this.question);
      this.getQuestionList(this.surveyService.surveyId);
    });
  }

  editQuestion(question){
    console.log(question);

    const dialogRef = this.dialog.open(EditQuestionDialog,
      {
        width: '250px',
        // height : '500px',
        data: {question}
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        console.log(result);
        this.surveyService.editQuestion(result.question).subscribe(
          (data) => {
            console.log(data);
            console.log("Choices",data.choices);
            this.getQuestionList(this.surveyService.surveyId);
          })
      }
    });
  }

  getQuestionList(surveyId: string) {
    this.surveyService.getAllQuestions(surveyId).subscribe(
      (data) => {
      this.questionList = data.questionList;
        console.log("questions : ", this.questionList)
      })
  }
}


@Component({
  selector: 'editQuestionDialog',
  templateUrl: 'editQuestionDialog.html',
})

export class EditQuestionDialog {

  constructor(

    public dialogRef: MatDialogRef<EditQuestionDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Question) { }

    private editQuestion : Question

    ngOnInit()
    {
        this.editQuestion = this.data;
        console.log(this.data);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
