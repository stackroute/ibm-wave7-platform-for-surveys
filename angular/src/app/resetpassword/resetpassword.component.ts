import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../modals/Login';
import { UserRegistrationService } from '../user-registration.service';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private registrationService: UserRegistrationService) { }
login:LoginUser;
private newPassword:string;
  private ConfirmNewPassword;
  ngOnInit() {
  }
  reset() {
    //console.log(this.ConfirmNewPassword);
    //this.authenticateService.resetpassword(this.ConfirmNewPassword)
    //console.log("srija")
    console.log("hello");
    this.login.email = "srijak890@gmail.com"
    this.login.password = this.ConfirmNewPassword;
    console.log(this.ConfirmNewPassword);
    this.registrationService.resetpassword(this.login)
    .subscribe(data => {
      console.log(data);
    });
}

}
