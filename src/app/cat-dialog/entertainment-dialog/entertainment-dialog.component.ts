import { UtilObj } from './../../models/util-objects';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

export interface entertainmentChoice{
  entertainmentInfo:Array<UtilObj>;
  entertainment:string
}

@Component({
  selector: 'app-entertainment-dialog',
  templateUrl: './entertainment-dialog.component.html',
  styleUrls: ['./entertainment-dialog.component.css']
})
export class EntertainmentDialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<EntertainmentDialogComponent>,@Inject(MAT_DIALOG_DATA)public data:entertainmentChoice) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onConfirm(digValue){
    this.dialogRef.close(digValue);
  }
}
