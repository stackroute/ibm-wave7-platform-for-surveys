import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';

@Component({
  selector: 'app-thanking-dialog-box',
  templateUrl: './thanking-dialog-box.component.html',
  styleUrls: ['./thanking-dialog-box.component.scss']
})
export class ThankingDialogBoxComponent implements OnInit {


  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit() {
  }

}
