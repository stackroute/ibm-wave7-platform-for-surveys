import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guid } from "guid-typescript";
import { Survey } from './modals/Survey';
import { environment } from '../environments/environment'
import { Question } from './modals/Question';
import { User } from './modals/User';
import { Response } from './modals/Response';
import { Mail } from './mail';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private httpclient: HttpClient) { }

  public surveyId: string;

  public loginCredentials: User;

  public publishedURL: String;

  public editSurvey: Survey;

  public targetUser: User;

  createSurvey(survey: Survey): Observable<Survey> {
    //creating a Guid Id
    survey.id = Guid.create().toString();
    this.surveyId = survey.id;
    //microservice create survey api link
    return this.httpclient.post<Survey>(environment.baseURI + "/survey/?surveyorId=" + this.loginCredentials.id, survey, httpOptions);
  }

  getAllSurveys(): Observable<Survey[]> {
    return this.httpclient.get<Survey[]>(environment.baseURI + "/survey");
  }

  getSurveysBySurveyor(): Observable<User> {
    return this.httpclient.get<User>(environment.baseURI + "/surveyor/" + this.loginCredentials.id);
  }

  getFilteredEmails(): Observable<String[]> {
    return this.httpclient.get<String[]>(environment.signUpBaseURI + "/surveyor/" + this.loginCredentials.id);
  }

  saveQuestion(question: Question) {
    //creating a Guid Id
    question.questionId = Guid.create().toString();
    question.domainType = this.editSurvey.domain_type;
    //microservice create survey api link
    console.log(question);
    return this.httpclient.post<Question>(environment.baseURI + "/questionToSurvey/?surveyId=" + this.surveyId, question, httpOptions)
  }

  editQuestion(question: Question) {
    let oldQuestionId = question.questionId;
    console.log(oldQuestionId)
    question.questionId = Guid.create().toString();
    console.log(question.questionId);
    return this.httpclient.put<Question>(environment.baseURI + "/question?surveyId=" + this.surveyId + "&questionId=" + oldQuestionId, question, httpOptions);
  }

  deleteQuestion(question: Question) {
    return this.httpclient.delete<Question>(environment.baseURI + "/question/" + question.questionId + "?surveyId=" + this.surveyId, httpOptions);
  }

  deleteSurvey(survey) {
    console.log("service" + survey.id)
    return this.httpclient.delete(environment.baseURI + "/survey/" + survey.id);
  }

  editSurveyById(survey : Survey)
  {
    return this.httpclient.put<Survey>(environment.baseURI +"/survey/",survey,httpOptions);
  }

  getAllQuestions(surveyId: string): Observable<Survey> {
    return this.httpclient.get<Survey>(environment.baseURI + "/survey/" + surveyId);
  }

  sendMail(mail: Mail) {
    console.log(mail);
    return this.httpclient.post(environment.mailURI, mail);
  }

  expiryCheck() {
    return this.httpclient.get<number>(environment.baseURI + "/expiryCheck?id=" + this.surveyId);
  }

  getRelatedSurveys() {
    return this.httpclient.get<String[]>(environment.baseURI + "/relatedSurveys?id=" + this.surveyId);
  }

  getAllMails() {
    return this.httpclient.get<string[]>(environment.signUpBaseURI + "/allMails");
  }
  getRecommendedQuestions(domain: String) {
    return this.httpclient.get<Question[]>(environment.baseURI + "/recommendations/" + domain);
  }

  saveResponse(userResponse: Response): Observable<Response> {
    return this.httpclient.post<Response>(environment.responseBaseURI + "/response", userResponse, httpOptions);
  }

  saveResponseList(responseList: Response[]): Observable<Response[]> {
    return this.httpclient.post<Response[]>(environment.responseBaseURI + "/responseList", responseList, httpOptions);
  }

  getResponseById(id: string): Observable<Response> {
    return this.httpclient.get<Response>(environment.responseBaseURI + "/response" + id);
  }

  getResponseList(): Observable<Response[]> {
    return this.httpclient.get<Response[]>(environment.responseBaseURI + "/response" );
  }

}