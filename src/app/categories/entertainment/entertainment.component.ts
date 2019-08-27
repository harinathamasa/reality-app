import { EntertainmentDialogComponent } from './../../cat-dialog/entertainment-dialog/entertainment-dialog.component';
import { UtilObj } from './../../models/util-objects';
import { MatDialog } from '@angular/material/dialog';
import { EntertainmentService } from './../../services/entertainment.service';
import { EntertainmentData } from './../../models/entertainment';
import { User } from './../../models/user-details';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  @Input() user: User;
  @Output() entertainmentValue = new EventEmitter();

  entertainmentData: Array<EntertainmentData>;
  entertainment: string;
  netMonthly: number;
  dialogOptions: Array<UtilObj> = [];
  constructor(public dialog: MatDialog, private entertainmentService: EntertainmentService) {
  }

  openDialog(): void {
    this.entertainmentData = this.entertainmentService.getEntertainmentData();
    this.entertainmentData.map(x => {
      var obj = {
        name: x.priviledge,
        value: x.costPerMonth
      };
      this.dialogOptions.push(obj);
    })
    console.log('in dialog..options' + JSON.stringify(this.dialogOptions));
    console.log('entertainment value' + JSON.stringify(this.entertainmentData));
    const dialogRef = this.dialog.open(EntertainmentDialogComponent, {
      width: '250px',
      data: {
        entertainmentInfo: this.dialogOptions,
        entertainment: this.entertainment
      }
      //data:this.clothing
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
      this.entertainment = result;
     /* this.netMonthly = this.user.netMonthly;
      this.netMonthly = this.netMonthly - this.clothvalue;
      this.clothingValue.emit((this.clothvalue).toString());*/
    });
  }



  ngOnInit() {
  }

}
