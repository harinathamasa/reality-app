import { DialogexampleComponent } from './../dialogexample/dialogexample.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { default as data } from 'src/assets/data/adminLogin'
import example from 'src/assets/data/adminLogin.json';

export interface DialogData {
  amount: number;
  name: string;
}

@Component({
  selector: 'app-reality-dialog',
  templateUrl: './reality-dialog.component.html',
  styleUrls: ['./reality-dialog.component.css']
})
export class RealityDialogComponent  {
  amount: number = 0;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    console.log('username'+data.key.username);
    console.log('example'+example.password);
    const dialogRef = this.dialog.open(DialogexampleComponent, {
      width: '250px',
      data: {name: "Harinath", amount: this.amount}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'+result);
      this.amount = result;
    });
  }

}
  


