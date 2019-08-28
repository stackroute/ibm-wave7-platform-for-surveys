import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guid } from "guid-typescript";
import { Survey } from './modals/Survey';
import { environment } from '../environments/environment'

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
    return this.httpclient.post<Survey>(environment.baseURI+"/survey", survey, httpOptions);
  }

  getAllSurveys() : Observable<Survey[]>
  {
    return this.httpclient.get<Survey[]>(environment.baseURI+"/survey");
  }
}
