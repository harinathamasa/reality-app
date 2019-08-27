import { UtilObj } from './../../models/util-objects';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClothingData } from './../../models/clothing';
import { ClothingService } from './../../services/clothing.service';
import { Component, OnInit, Inject } from '@angular/core';

export interface clothingChoice{
  clothing:ClothingData;
  clothvalue:number
}

@Component({
  selector: 'app-clothing-dialog',
  templateUrl: './clothing-dialog.component.html',
  styleUrls: ['./clothing-dialog.component.css']
})
export class ClothingDialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<ClothingDialogComponent>,@Inject(MAT_DIALOG_DATA)public data:clothingChoice) { 

  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  onConfirm(digValue){
    this.dialogRef.close(digValue);
  }
  ngOnInit() {
  }

}
