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
  apiUrl = "http://localhost:8090/user";
  public user:User;
  saveUser(user:User):Observable<User>
  {
    user.id = Guid.create().toString();
    return this.httpClient.post<User>(this.apiUrl, user, httpOptions);
  }
updateUser(id:String,user:User){
  var url = "http://localhost:8090/user";
  return this.httpClient.put<User>(url + "/" + user.id, user, httpOptions);

}
}
