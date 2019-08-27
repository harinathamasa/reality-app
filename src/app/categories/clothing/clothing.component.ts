import { UtilObj } from './../../models/util-objects';
import { ClothingService } from './../../services/clothing.service';
import { ClothingData } from './../../models/clothing';
import { User } from './../../models/user-details';
import { DialogexampleComponent } from './../../dialogexample/dialogexample.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit,Input, Output } from '@angular/core';
import { ClothingDialogComponent } from 'src/app/cat-dialog/clothing-dialog/clothing-dialog.component';
import { EventEmitter } from '@angular/core';

export interface clothingChoice{
  clothingInfo:ClothingData;
  clothvalue:number
}

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent {
  @Input() user:User;
  @Output() clothingValue = new EventEmitter();

  clothing:ClothingData;
  clothvalue:number;
  netMonthly:number ;
  //clothingOption:Array<UtilObj>
  constructor(public dialog: MatDialog,private clothingService:ClothingService) {
    console.log('user in clothing..'+JSON.stringify(this.user));
    //this.clothing = this.clothingService.getUserClothingInfo(this.user.netMonthly);
  }
 
  openDialog(): void {
    this.clothing = this.clothingService.getUserClothingInfo(this.user.netMonthly);
    console.log('in clothing..user'+JSON.stringify(this.user));
    console.log('clothvalue'+this.clothvalue);
    /*this.clothingOption = [
      {name:"Thrift Store",value:this.clothing.thirftStore},
      {name:"Department Store",value:this.clothing.departmentStore},
      {name:"Designer Store",value:this.clothing.designer},
    ]*/
    
    const dialogRef = this.dialog.open(ClothingDialogComponent, {
      width: '250px',
      data:{
        clothingInfo:this.clothing,
        clothvalue:this.clothvalue
      }
      //data:this.clothing
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'+result);
      this.clothvalue = result;
      this.netMonthly = this.user.netMonthly;
      this.netMonthly = this.netMonthly - this.clothvalue;
      this.clothingValue.emit((this.clothvalue).toString());
    });
  }

}
