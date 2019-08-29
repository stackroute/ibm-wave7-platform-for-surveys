import { Component, OnInit,Inject } from '@angular/core';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';
import { UserRegistrationService } from '../user-registration.service';
import { User } from '../modals/User';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
  public updateUser: User;
  user:User;
  public updatedEmail:String
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
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
      console.log('updated comment:' , this.updatedEmail);
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
saveUser(user: User) {
  console.log(user);
  this.registrationService.saveUser(user).subscribe((data)=> {
     this.user = data;
    console.log("result is ", user);
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
    @Inject(MAT_DIALOG_DATA) public data: User) {}
    onNoClick(): void {
      this.dialogRef.close();
    }
 }