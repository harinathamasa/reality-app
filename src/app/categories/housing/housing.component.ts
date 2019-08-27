import { User } from './../../models/user-details';
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.css']
})
export class HousingComponent implements OnInit {
  @Input() user:User;
  @Output() housingValue = new EventEmitter();

  housing_value:number;
  constructor() { }

  ngOnInit() {
  }

}
