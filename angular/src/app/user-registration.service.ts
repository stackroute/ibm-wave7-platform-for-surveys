import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from "@angular/common/http";
import { User } from "./modals/User";
import { Observable } from 'rxjs';
import { Guid } from "guid-typescript";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "my-auth-token"
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private httpClient:HttpClient) { }
  public user:User;
  saveUser(user:User):Observable<User>
  {
     var apiUrl = "http://localhost:8090/user";
    user.id = Guid.create().toString();
    return this.httpClient.post<User>(apiUrl, user, httpOptions);
  }
}
