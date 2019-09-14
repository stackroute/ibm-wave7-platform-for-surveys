import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserRegistrationService } from '../user-registration.service';
import { LoginUser } from '../modals/Login';
import { Observable } from 'rxjs';
import { User} from '../modals/User'

@Component({
  selector: 'app-mypassword',
  templateUrl: './mypassword.component.html',
  styleUrls: ['./mypassword.component.scss']
})
export class MypasswordComponent implements OnInit {
  minPw = 8;
  formGroup: FormGroup
//  private user=new Users();
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

  //  onPasswordInput() {
  //    if (this.formGroup.hasError('passwordMismatch'))
  //      this.password2.setErrors([{'passwordMismatch': true}]);
  //    else
  //      this.password2.setErrors(null);
  //  }

// >>>>>>> 10c626aef4921303766efd2ba136750cf09c9115
  //  updatePassword(){
  //    this.registrationService.forgotPassword(this.login,this.login.password).subscribe((data)=> {
      
  //     console.log(data);
  //  });
  // }
  
  // reset() {
  //   console.log(this.email);
  //   this.user.email = this.email;
    
  //   this.registrationService.forgotPassword(this.user)
  //   .subscribe(data => {
  //     console.log(data);
  //   });

  // }
  }
