import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from "@angular/common/http";
import { User } from "./modals/User";
import { LoginUser } from "./modals/Login";
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Guid } from "guid-typescript";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': "application/json",
    'Authorization': "my-auth-token"
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private httpClient:HttpClient) { }
  public user:User;
  public loginCredentials : User;
  saveUser(user:User):Observable<User>
  {
    user.id = Guid.create().toString();
    return this.httpClient.post<User>(environment.signUpBaseURI+"/user", user, httpOptions);
  }


public loginuser:LoginUser;
// login(user:LoginUser): Observable<LoginUser>{
//     var apiUrl = "http://localhost:8080/login";
//     // this.authenticateUser(user);
//     return this.httpClient.post<LoginUser>(apiUrl, this.loginuser, httpOptions);

//   }

  authenticateUser(user:LoginUser): Observable<boolean>{
    this.loginuser = user;
    return this.httpClient.get<boolean>(environment.loginBaseURI+'/authenticate?username='+user.email+'&password='+user.password)
    .pipe(
      catchError((error: any) =>
      {
        console.log(error);
        return throwError(error)
      }
    ))
    // return this.httpClient.get<boolean>(environment.loginBaseURI+'/authenticate/?username='+user.username+'&password='+user.password);
  }
updateUser(user:User,id:String):Observable<User>{
  console.log(user);
  var url = "http://localhost:8095/user/"+105;
  return this.httpClient.put<User>(url ,user, httpOptions);

}
forgotPassword(login:LoginUser,password:String){
  var apiUrl = "http://localhost:8080/authenticate";
  return this.httpClient.put(apiUrl + "/" + login.password,httpOptions);
}
getUser():Observable<User>{
  var url = "http://localhost:8095/user";
 
  return this.httpClient.get<User>(url);

}
getUserById(id:string):Observable<User>{
  var url="http://localhost:8095/user/"+105;
return this.httpClient.get<User>(url);
}
getUserByEmail(email : string):Observable<User>{
 
  return this.httpClient.get<User>(environment.signUpBaseURI+"/user/"+email);

}
}
