import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from "@angular/common/http";
import { User } from "./modals/User";
import { LoginUser } from "./modals/Login";

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
    var apiUrl = "http://localhost:8095/user";
    user.id = Guid.create().toString();
    return this.httpClient.post<User>(apiUrl, user, httpOptions);
  }


public loginuser:LoginUser;
// login(user:LoginUser): Observable<LoginUser>{
//     var apiUrl = "http://localhost:8080/login";
//     // this.authenticateUser(user);
//     return this.httpClient.post<LoginUser>(apiUrl, this.loginuser, httpOptions);

//   }

  authenticateUser(user:LoginUser): Observable<boolean>{
    var apiUrl = "http://localhost:8080/authenticate";
    return this.httpClient.get<boolean>(apiUrl+'/?username='+user.username+'&password='+user.password);
     var apiUrl = "http://localhost:8090/user";
    user.id = Guid.create().toString();
  }
}
