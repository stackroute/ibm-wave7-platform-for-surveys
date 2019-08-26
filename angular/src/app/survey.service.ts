import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guid } from "guid-typescript";
import { Survey } from './modals/Survey';


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
    var postUrl = "http://localhost:8090/api/v1/survey";
    return this.httpclient.post<Survey>(postUrl, survey, httpOptions);
  }
}