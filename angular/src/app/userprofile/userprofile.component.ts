import { Component, OnInit, Inject } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';
import { User } from '../modals/User';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogData{
  email:string;
  gender:string;
  ageGroup : string;
  location :string;
}

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {
  name :string;
  user:User;
  
  email:string;
  id:string;
  constructor(private registrationService: UserRegistrationService,private dialog: MatDialog) { }

  ngOnInit() {
    console.log(this.user)
    this.id = localStorage.getItem('loggedInUserId');
    this.registrationService.getUserById(this.id).subscribe((data) =>{
      this.user=data;
      console.log(this.user);
    })
  }
  updateUser(user:User){
    //console.log(user);
    user.password=this.user.password;
    user.role=this.user.role;
    user.email=this.user.email;
    this.registrationService.updateUser(user,user.id).subscribe((data)=> {
       this.user = data;
      console.log("result is ", data);
      this.registrationService.getUserById(this.id).subscribe((data) => {
        this.user=data;})
    });
}
  data;
  openDialog(user:User) {
    const dialogRef = this.dialog.open(DialogComponents,
      {
        width : '300px',
        data : {}
      });
    dialogRef.afterClosed().subscribe(result => {
      this.data=result;
      console.log(result);
      this.updateUser(result);
    });
  }
  
  


 }
@Component({
  selector: 'app-dialogComponent',
  templateUrl: 'dialogComponent.html',
 })
 export class DialogComponents implements OnInit {
  
  user:User;
  email:string;
  name:string;
  gender:string;
  ageGroup:string;
  ngOnInit() {}
    
  
  constructor(
    public dialogRef: MatDialogRef<DialogComponents>,
    @Inject(MAT_DIALOG_DATA) public data,private registrationService: UserRegistrationService) {}
    onNoClick(): void {
      this.dialogRef.close();
    }
  
}
