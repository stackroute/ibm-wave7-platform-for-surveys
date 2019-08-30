import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guid } from "guid-typescript";
import { Survey } from './modals/Survey';
import { environment } from '../environments/environment'
import { Question } from './modals/Question';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private httpclient : HttpClient) { }


  createSurvey(survey: Survey): Observable<Survey> {
    //creating a Guid Id
    survey.id = Guid.create().toString();

    //microservice create survey api link
    return this.httpclient.post<Survey>(environment.baseURI+"/survey?surveyorId=24", survey, httpOptions);
  }

  getAllSurveys() : Observable<Survey[]>
  {
    return this.httpclient.get<Survey[]>(environment.baseURI+"/survey");
  }
  
  saveQuestion(question:Question)
  {
 //creating a Guid Id
 question.question_id = Guid.create().toString();
 //microservice create survey api link
 console.log(question);
 return this.httpclient.post<Question>(environment.baseURI+"/question", question, httpOptions)
}
  deleteSurvey(survey){
    console.log("service"+survey.id)
    return this.httpclient.delete("http://localhost:8090/api/v1/survey/"+survey.id);
  }
  // getAllQuestions() :Observable<Question[]>
  // {
  //   return this.httpclient.get<Question[]>(environment.baseURI+"/question");
  // }
  getAllQuestions() :Observable<Survey>
  {
    return this.httpclient.get<Survey>(environment.baseURI+"/survey/24");
  }

  deleteQuestion(question_id : string)
  {
    return this.httpclient.delete<Question>(environment.baseURI+"/survey/"+question_id);
  }
}
