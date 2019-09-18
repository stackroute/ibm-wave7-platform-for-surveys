import { Injectable } from '@angular/core';


//import { ApiAiClient } from 'api-ai-javascript';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient'
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';

// Message class for displaying messages in the component
export class Message {
  constructor(public content: string, public sentBy: string) {}
}

@Injectable()
export class ChatService {

  readonly token = environment.dialogflow.chatbot;
  readonly client = new ApiAiClient({ accessToken: this.token });

  conversation = new BehaviorSubject<Message[]>([]);

  constructor() { }
  init(){
    this.update(new Message("Hi! Welcome to Pollurvey bot.","bot"));
  }
  talk(){
    this.client.textRequest('who are you!').then(res =>console.log(res));
  }
 
  // Sends and receives messages via DialogFlow
  converse(msg: string) {
    const userMessage = new Message(msg, 'user');
    this.update(userMessage);

    return this.client.textRequest(msg)
               .then(res => {
                  const speech = res.result.fulfillment.speech;
                  const botMessage = new Message(speech, 'bot');
                  this.update(botMessage);
               });
  }

  // Adds message to source
  update(msg: Message) {
    console.log('botMessage:', msg);
    console.log('botMessage:', msg.content);
    console.log('botMessage:', msg.sentBy);
    this.conversation.next([msg]);
    if (msg.sentBy == 'bot') {
      this.synthVoice(msg.content);
    }
  }

  // add voice to response
  synthVoice(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    synth.speak(utterance);
  }  

}
