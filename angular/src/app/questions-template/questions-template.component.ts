import { Component, OnInit, Inject, Input } from "@angular/core";
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
import { Mail } from '../mail';


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
  public userResponse: Response;
  emailIds: string[];
  private email: Mail;

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
    this.survey=this.surveyService.editSurvey;
    this.getQuestionList(this.surveyService.editSurvey.id);
    this.getRecommendedQuestions(this.surveyService.editSurvey.domain_type);
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
      let droppedQuestion = event.container.data[0];                    
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
    this.surveyService.editSurvey.status = "Open";
    this.surveyService.editSurveyById(this.surveyService.editSurvey).subscribe((data) => {
      console.log(data);
      this.surveyService.getAllMails().subscribe((emailIds) => {
        this.emailIds = emailIds;
        console.log(this.emailIds);
        this.sendLink(this.emailIds);
      });
    })
  }

  sendLink(Ids) {
    this.email = {
      "url": "http://172.23.238.245:4200/user-welcome/" + this.surveyService.surveyId,
      "emailIds": Ids
    };
    console.log(this.email.url);
    this.surveyService.sendMail(this.email).subscribe(data => {
      console.log(data);
    });
    console.log(this.route.snapshot);
    let surveyId = this.route.snapshot.paramMap.get('surveyId');
    console.log(surveyId);
    this.surveyService.publishedURL = this.email.url;
    this.surveyService.emailIds=Ids;
    this.router.navigate(["publishview", surveyId]);
  }

  getFilteredEmails() {
    this.surveyService.getFilteredEmails().subscribe(
      (data) => {
        console.log(data);
      }),
      (error) => {
        console.log(error);
      }
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

  getRecommendedQuestions(domain: string) {
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
