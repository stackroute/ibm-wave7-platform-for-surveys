import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
//import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import 'rxjs/add/operator/scan';
import 'rxjs/Rx';
import { ChatService, Message} from '../chat.service';
import { MatBottomSheetRef } from '@angular/material';
import { Question } from '../modals/Question';
import { SurveyService } from '../survey.service';
@Component({
 selector: 'app-chatbot',
 templateUrl: './chatbot.component.html',
 styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {
 messages: Observable<Message[]>;
 formValue: string;
 question : Question = {
   questionId:"",
   questionTag:"",
   choices:[],
   survey_id:"",
   domainType:"",
   response : ""
 };
 constructor(public chat: ChatService, private _bottomSheetRef: MatBottomSheetRef, private surveyService : SurveyService) { }
 ngOnInit() {
   this.chat.init();
   this.chat.talk();
   // appends to array after each new message is added to feedSource
   this.messages = this.chat.conversation.asObservable().pipe()
       .scan((acc, val) => acc.concat(val) );
 }
 sendMessage() {
   this.chat.converse(this.formValue);
   if(this.formValue.match("ques-"))
   {
   let questionTag = this.formValue.split('-')[1]
   this.question.questionTag = questionTag;
   console.log(questionTag);
   }
   if(this.formValue.match(","))
   {
   this.question.choices = this.formValue.split(',');
   console.log(this.question.choices);
   this.surveyService.saveQuestion(this.question).subscribe(
     (data) => {
      console.log(data);
     },
     (error) => {
       console.log(error);
      })
   }
   this.formValue = '';
 }
}