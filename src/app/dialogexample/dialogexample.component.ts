import { User } from './../models/user-details';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  amount: number;
  name: string;
}

@Component({
  selector: 'app-dialogexample',
  templateUrl: './dialogexample.component.html',
  styleUrls: ['./dialogexample.component.css']
})
export class DialogexampleComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogexampleComponent>,@Inject(MAT_DIALOG_DATA) public user: User) { }

  onNoClick(){
    this.dialogRef.close('Close');
  }

  ngOnInit() {
  }

}
