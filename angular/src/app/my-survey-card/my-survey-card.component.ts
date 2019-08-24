import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Survey} from '../modals/Survey';

@Component({
  selector: 'app-my-survey-card',
  templateUrl: './my-survey-card.component.html',
  styleUrls: ['./my-survey-card.component.scss']
})
export class MySurveyCardComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateSurveyDialogue,
      {
        width: '250px',
        data: {}
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        console.log(result);
      }
    });
  }
}

@Component({
  selector: 'create-survey-dialogue',
  templateUrl: 'create-survey-dialogue.html',
})

export class CreateSurveyDialogue {

  constructor(

    public dialogRef: MatDialogRef<CreateSurveyDialogue>,
    @Inject(MAT_DIALOG_DATA) public data: Survey) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
