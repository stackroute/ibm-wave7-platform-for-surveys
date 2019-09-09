import { Component, OnInit, Inject } from "@angular/core";
import { SurveyService } from "../survey.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Question } from "../modals/Question";
import { Survey } from "../modals/Survey";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { HttpClient } from "@angular/common/http";
import { Location } from "@angular/common";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NgForm } from '@angular/forms';

import { ChatbotComponent } from '../chatbot/chatbot.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';


@Component({
  selector: "app-questions-template",
  templateUrl: "./questions-template.component.html",
  styleUrls: ["./questions-template.component.scss"]
})
export class QuestionsTemplateComponent implements OnInit {

  private condition: boolean;
  private choiceVisibility: boolean;
  private count: number;
  private question: Question;
  private survey: Survey;
  private questionList: Question[];
  private recommendedQuestionList: Question[];
  private newchoices: string[] = [];
  private url;
  public userResponse: Response;

  constructor(
    private surveyService: SurveyService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private location: Location,
    private httpClient: HttpClient,
    private router: Router,
    private bottomSheet: MatBottomSheet
  ) { }

  ngOnInit() {
    this.getQuestionList(this.surveyService.editSurvey.id);
    this.getRecommendedQuestions(this.surveyService.editSurvey.domain_type);
    this.url = window.location.href;
  }


  drop(event: CdkDragDrop<Object[]>) {
    console.log(event.previousContainer.data);
    console.log(event.container.data[0]);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      // let droppedQuestion = event.container.data[0];                    
      this.saveDroppedQuestion(event.container.data[event.currentIndex]);
    }
  }

  remove(event: CdkDragDrop<Object[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      this.deleteQuestion(event.container.data[event.currentIndex]);
    }
  }

  saveDroppedQuestion(question: any) {
    console.log("questin from ts", question);
    this.surveyService.saveQuestion(question).subscribe((data) => {
      this.question = data;
      console.log("result is ", this.question);
      this.getQuestionList(this.surveyService.editSurvey.id);
    });
  }

  publish() {
    this.surveyService.sendMail(this.url).subscribe(data => {
      console.log(data);
    });
    // let surveyId=this.route.snapshot.queryParams["surveyId"];
    console.log(this.route.snapshot);
    let surveyId=this.route.snapshot.paramMap.get('surveyId');
    console.log(surveyId);
    this.surveyService.publishedURL = this.url;
    this.router.navigate(["publishview", surveyId]);
  }


  addQuestion() {
    this.condition = true;
  }

  deleteQuestion(question: any) {
    this.surveyService.deleteQuestion(question).subscribe(data => {
      console.log(data);
      this.getQuestionList(this.surveyService.editSurvey.id);
    });
  }

  getRecommendedQuestions(domain: String) {
    this.surveyService.getRecommendedQuestions(domain).subscribe(data => {
      this.recommendedQuestionList = data;
      console.log("Recommended Questions : ", this.recommendedQuestionList);
    });
  }

  addChoice(choiceText: string) {
    this.newchoices.push(choiceText);
    (<HTMLInputElement>document.getElementById("choiceText")).value = '';
  }

  saveQuestion(form: NgForm) {
    let question = form.value;
    question.choices = this.newchoices;
    console.log("questin from ts", question);
    this.surveyService.saveQuestion(question).subscribe((data) => {
      this.question = data;
      console.log("result is ", this.question);
      this.getQuestionList(this.surveyService.editSurvey.id);
      this.condition = false;
      form.reset();
      this.newchoices = [];
    });

  }

  editQuestion(question) {
    console.log(question);
    const dialogRef = this.dialog.open(EditQuestionDialog, {
      width: "250px",
      data: { question }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        console.log(result);
        this.surveyService.editQuestion(result.question).subscribe(data => {
          console.log(data);
          console.log("Choices", data.choices);
          this.getQuestionList(this.surveyService.surveyId);
        });
      }
    });
  }

  getQuestionList(surveyId: string) {
    this.surveyService.getAllQuestions(surveyId).subscribe(data => {
      this.questionList = data.questionList;
      console.log("questions : ", this.questionList);
    });
  }


  chat() {
    //this.router.navigateByUrl('/chat');
    // this.bottomSheet.open(ChatbotComponent,panelClass: 'custom-width');
    this.bottomSheet.open(ChatbotComponent, {
      panelClass: 'custom-width'
    });
  }


}

@Component({
  selector: "editQuestionDialog",
  templateUrl: "editQuestionDialog.html"
})
export class EditQuestionDialog {
  constructor(
    public dialogRef: MatDialogRef<EditQuestionDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Question
  ) { }

  private editQuestion: Question;

  ngOnInit() {
    this.editQuestion = this.data;
    console.log(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}