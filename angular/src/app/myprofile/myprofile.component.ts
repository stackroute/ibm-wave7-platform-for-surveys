import { Component, OnInit,Inject } from '@angular/core';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';
import { UserRegistrationService } from '../user-registration.service';
import { User } from '../modals/User';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginUser } from '../modals/Login';



@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
  public updateUser: User;
  private name :String;
  user:User;
  public updatedEmail:String
  user1:LoginUser
  
  constructor(private registrationService: UserRegistrationService,private dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(user:User) {
    this.updateUser = user
    const dialogRef = this.dialog.open(DialogComponent,
      {
        width : '250px',
        data : {}
      });
    dialogRef.afterClosed().subscribe(result => {
      this.updatedEmail = result;
      console.log('Dialog result: ${result}');
      console.log('updated email:' , this.updatedEmail);
      this.updateUser;
    });
  }
  
  onclick(){
    //console.log(user);
    this.registrationService.updateUser(this.updateUser.id,this.updateUser).subscribe((data)=> {
       this.user = data;
      console.log("result is ", data);
    });
}


}
@Component({
  selector: 'app-dialogComponent',
  templateUrl: 'dialogComponent.html',
 })
 export class DialogComponent {
  
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,private registrationService: UserRegistrationService) {}
    onNoClick(): void {
      this.dialogRef.close();
    }
    user:LoginUser
    saveUser(user: User) {
      console.log(user);
      this.registrationService.saveUser(user).subscribe((data)=> {
        //  this.user = data;
        console.log("result is ", user);
      });
    }
 }