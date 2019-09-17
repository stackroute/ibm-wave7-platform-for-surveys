
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import { SpeechRecognitionService } from '../speech-recognition.service';
import { Question } from '../modals/Question';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {
  @ViewChild('sendButtonRef',{ static: false }) sendButtonRef: ElementRef;

  //SpeechRecognition variables
  startListenButton: boolean;
  stopListeningButton: boolean;
  speechData: string;
  
  //DialogFlow variables
  messages: Observable<Message[]>;
  formValue: string;
  question: Question = {
    questionId: "",
    questionTag: "",
    choices: [],
    survey_id: "",
    domainType: "",
    response: ""
  };
  constructor(public chat: ChatService,private surveyService : SurveyService,
    private speechRecognitionService: SpeechRecognitionService) {
      this.startListenButton = true;
      this.stopListeningButton = false;
      this.speechData = "";
  }

  ngOnInit() {
        // DialogFlow setup: appends to array after each new message is added to feedSource
        this.messages = this.chat.conversation.asObservable()
        .scan((acc, val) => acc.concat(val) );
  }

  sendMessage() {
    this.chat.converse(this.formValue);

    if (this.formValue.match("question is")) {
      let questionTag = this.formValue.replace("question is", '');
      this.question.questionTag = questionTag;
      console.log(questionTag);
    }
    if(this.formValue.match(","))
   {
    let optionString = this.formValue.replace("options are", '');
   this.question.choices = optionString.split(',');
   console.log(this.question.choices);
   this.surveyService.saveQuestion(this.question).subscribe(
     (data) => {
      console.log(data);
     },
     (error) => {
       console.log(error);
      })
   }
    
    // this.setListener();
    this.messages.subscribe(val => console.log("component amy 1", val));
    // WIP: doesnt work. Still listens to itself
    let robotResponse: any;
    this.messages.subscribe(val => {
      console.log("component amy 1", val);
      robotResponse = val;
      const total = robotResponse.length - 1 < 0 ? 0 : robotResponse.length - 1;
      console.log("rbot length", total);
      let lastRobotResponse = robotResponse[total];
      console.log("rbot sentBy", lastRobotResponse.sentBy);
      console.log(
        "rbot start stop",
        this.startListenButton,
        this.stopListeningButton
      );
      if (total == 1 && lastRobotResponse.sentBy == "bot") {
        if (this.startListenButton && !this.stopListeningButton) {
          console.log("rbot activating speech");
          this.activateSpeechSearch();
        }
      }
    });

    this.formValue = "";
  }

  //SpeechRecognition related implementations below
  ngOnDestroy() {
    this.speechRecognitionService.DestroySpeechObject();
  }

  activateSpeechSearch(): void {
    this.startListenButton = false;

    this.speechRecognitionService.record()
        .subscribe(
        //listener
        (value) => {
            this.speechData = value;
            this.formValue = value;
            console.log('listener.speechData:', value);
        },
        //error
        (err) => {
            console.log(err);
            if (err.error == "no-speech") {
                console.log("--restarting service--");
                this.activateSpeechSearch();
            }
        },
        //completion
        () => {
            this.startListenButton = true;
            console.log("--complete--");
            this.sendMessageFromSpeechRecognition();
            console.log('this.stopListeningButton', this.stopListeningButton);
            // if (!this.stopListeningButton) {
            //   this.activateSpeechSearch();
            // }

        });
  }

  deActivateSpeechSearch(): void {
    this.startListenButton = true;
    this.stopListeningButton = true;
    this.speechRecognitionService.DestroySpeechObject();
  }

  sendMessageFromSpeechRecognition(): void {
    this.speechRecognitionService.DestroySpeechObject();
    this.sendMessage();
    // setTimeout(() => {
    //   console.log('clicking');
    //   this.sendMessage();
    // }, 8000);
    // let element: HTMLElement = this.sendButtonRef.nativeElement as HTMLElement;
    // element.click();
  }
}