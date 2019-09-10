import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
//import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import 'rxjs/add/operator/scan';
import 'rxjs/Rx';
import { ChatService, Message} from '../chat.service';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {

  messages: Observable<Message[]>;
  formValue: string;

  constructor(public chat: ChatService,private _bottomSheetRef: MatBottomSheetRef<ChatbotComponent>) { }

  ngOnInit() {
    this.chat.talk();
    // appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation.asObservable().pipe()
        .scan((acc, val) => acc.concat(val) );
  }

  sendMessage() {
    this.chat.converse(this.formValue);
    this.formValue = '';
  }

}