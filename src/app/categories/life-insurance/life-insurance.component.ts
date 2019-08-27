import { User } from './../../models/user-details';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-life-insurance',
  templateUrl: './life-insurance.component.html',
  styleUrls: ['./life-insurance.component.css']
})
export class LifeInsuranceComponent implements OnInit {
  @Input() user:User;
  @Output() lifeInsuranceValue = new EventEmitter();

  lifeInsurance_value:number;
  constructor() { }

  ngOnInit() {
  }

}
