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
    private router: Router,
    private bottomSheet: MatBottomSheet
  ) { }

  ngOnInit() {
    this.surveyService.getSurveysBySurveyor().subscribe((data) => {
      console.log(data);
      this.survey = data.surveysList.filter(x => x.id == localStorage.getItem('EditingSurveyId'))[0]
      this.getQuestionList(localStorage.getItem('EditingSurveyId'));
      console.log(this.survey);
      this.getRecommendedQuestions(this.survey.domain_type);
    })
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
    this.surveyService.saveQuestion(question, this.survey.domain_type).subscribe((data) => {
      this.question = data;
      console.log("result is ", this.question);
      this.getQuestionList(localStorage.getItem('EditingSurveyId'));
    });
  }

  publish() {
    this.survey.status = "Open";
    this.surveyService.editSurveyById(this.survey).subscribe((data) => {
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
      "url": "http://13.235.226.107:4200/user-welcome/" + localStorage.getItem('EditingSurveyId'),
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
      },
      (error) => {
        console.log(error);
      })
  }

  addQuestion() {
    this.condition = true;
  }

  deleteQuestion(question: any) {
    this.surveyService.deleteQuestion(question).subscribe(data => {
      console.log(data);
      this.getQuestionList(this.survey.id);
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
    this.surveyService.saveQuestion(question, this.survey.domain_type).subscribe((data) => {
      this.question = data;
      console.log("result is ", this.question);
      this.getQuestionList(this.survey.id);
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
          this.getQuestionList(localStorage.getItem('EditingSurveyId'));
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
    this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe(data => {
      this.surveyService.getAllQuestions(this.survey.id).subscribe(data => {
      this.questionList = data.questionList;
      });
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
