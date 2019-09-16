import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-thanking-dialog-box',
  templateUrl: './thanking-dialog-box.component.html',
  styleUrls: ['./thanking-dialog-box.component.scss']
})
export class ThankingDialogBoxComponent implements OnInit {

  email:string;

  constructor(public dialog: MatDialog,private user:UserRegistrationService) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit() {

  }



}
