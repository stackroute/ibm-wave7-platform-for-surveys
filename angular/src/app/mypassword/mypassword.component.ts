import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserRegistrationService } from '../user-registration.service';
import { LoginUser } from '../modals/Login';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mypassword',
  templateUrl: './mypassword.component.html',
  styleUrls: ['./mypassword.component.scss']
})
export class MypasswordComponent implements OnInit {
  minPw = 8;
  formGroup: FormGroup
  login:LoginUser
  private email;
  constructor(private formBuilder: FormBuilder,private registrationService: UserRegistrationService) { }

  ngOnInit() {
    // this.formGroup = this.formBuilder.group({
    //   password: ['', [Validators.required, Validators.minLength(this.minPw)]],
    //   password2: ['', [Validators.required]]
    // });
  }
   /* Shorthands for form controls (used from within template) */
  //  get password() { return this.formGroup.get('password'); }
  //  get password2() { return this.formGroup.get('password2'); }
 
   /* Called on each input in either password field */
  //  onPasswordInput() {
  //    if (this.formGroup.hasError('passwordMismatch'))
  //      this.password2.setErrors([{'passwordMismatch': true}]);
  //    else
  //      this.password2.setErrors(null);
  //  }
  //  updatePassword(){
  //    this.registrationService.forgotPassword(this.login,this.login.password).subscribe((data)=> {
      
  //     console.log(data);
  //  });
  // }
  reset() {
    console.log(this.email);
    //this.login.name = this.email;
    this.registrationService.forgotPassword(this.login)
    .subscribe(data => {
      console.log(data);
    });
console.log(this.email);
  }
  }
