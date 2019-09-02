import { Component, OnInit,Inject } from '@angular/core';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';
import { UserRegistrationService } from '../user-registration.service';
import { User } from '../modals/User';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginUser } from '../modals/Login';
import { Profile } from 'selenium-webdriver/firefox';

export interface DialogData{
  email:String
}

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
  
 name :String;
  user:User;
  email:String;
  
  
  
  constructor(private registrationService: UserRegistrationService,private dialog: MatDialog) { }

  ngOnInit() {
    this.registrationService.getUser().subscribe((data) =>{
      this.user=data;
      console.log(this.user);
    })
  }
  updateUser(user:User){
    //console.log(user);
    this.registrationService.updateUser(user,user.id).subscribe((data)=> {
       this.user = data;
      console.log("result is ", data);
      this.registrationService.getUser().subscribe((data) => {
        this.user=data;})
    });
}
  data;
  openDialog(user:User) {
    const dialogRef = this.dialog.open(DialogComponent,
      {
        width : '250px',
        data : {}
      });
    dialogRef.afterClosed().subscribe(result => {
      this.data=result;
      console.log(result);
      this.updateUser(result);
    });
  }
  
  
// saveUser(user: User) {
//   console.log(user);
//   this.registrationService.saveUser(user).subscribe((data)=> {
//       this.user = data;
//     console.log("result is ", user);
//   });
// }

 }
@Component({
  selector: 'app-dialogComponent',
  templateUrl: 'dialogComponent.html',
 })
 export class DialogComponent {
  
  user:User;
  email:string;
  name:string;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,private registrationService: UserRegistrationService) {}
    onNoClick(): void {
      this.dialogRef.close();
    }
  
    
 }