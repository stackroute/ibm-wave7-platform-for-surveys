import { Component, OnInit, Inject } from '@angular/core';
import { SurveyService } from '../survey.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from '../modals/Question';
import { Survey } from '../modals/Survey';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Mail} from '../mail'

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
  private email:Mail;

  constructor(private surveyService: SurveyService,
    private dialog : MatDialog,private router:Router) { }
   
   

  ngOnInit() {

    this.getQuestionList(this.surveyService.surveyId);
   this.email={url:"http://172.23.238.147:4200/publishview/questions?surveyId="+this.surveyService.surveyId};

    
  }
  publish()
  {
    this.surveyService.sendMail(this.email).subscribe(
      (data) =>{
        console.log(data);
      });
      this.surveyService.publishedURL = this.email.url;
        this.router.navigateByUrl('publishview')
  }

  addQuestion() {
    this.condition = true;
  }

  deleteQuestion(question : Question)
  {
   this.surveyService.deleteQuestion(question).subscribe(
     (data) => {
         console.log(data);
         this.getQuestionList(this.surveyService.surveyId);
     })
  }

  addChoice(choiceText : string) {

    this.newchoices.push(choiceText);
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
