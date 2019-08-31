import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveycardService {

  constructor(private http:HttpClient) { }

  surveydata():Observable<String>
  {
    return this.http.get<String>("http://localhost:3000/data");
  }
}
