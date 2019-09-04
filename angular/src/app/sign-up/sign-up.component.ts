import { Component, OnInit } from "@angular/core";
import { UserRegistrationService } from "../user-registration.service";
import { ActivatedRoute } from "@angular/router";
import { User } from "../modals/User";
import { Router } from "@angular/router";
import { FormControl, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnInit {
  public user: User;

  constructor(
    private registrationService: UserRegistrationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}
  nameFormControl = new FormControl("", [Validators.required]);
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);
  passwordFormControl = new FormControl("", [Validators.required]);
  roleFormControl = new FormControl("", [Validators.required]);
  biodataForm: FormGroup = new FormGroup({
    email: this.emailFormControl,
    name: this.nameFormControl,
    password: this.passwordFormControl,
    role: this.roleFormControl
  });
  getRequiredErrorMessage(field) {
    return this.biodataForm.get(field).hasError("required")
      ? "You must enter a value"
      : "";
  }
  getEmailErrorMessage(field) {
    return this.emailFormControl.hasError("required")
      ? "You must enter a value"
      : this.emailFormControl.hasError("email")
      ? "Not a valid email"
      : "";
  }
  getPasswordErrorMessage(field) {
    return this.biodataForm.get(field).hasError("required")
      ? "You must enter a value"
      : "";
  }
  getRoleErrorMessage(field) {
    return this.biodataForm.get(field).hasError("required")
      ? "You must enter a value"
      : "";
  }
  saveUser(user: User) {
    this.registrationService.saveUser(user).subscribe(data => {
      this.user = data;
      console.log("result is ", data);
      alert("Account successfully created");
      this.router.navigateByUrl("login");
    });
  }
}
