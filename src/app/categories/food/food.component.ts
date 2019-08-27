import { User } from './../../models/user-details';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  @Input() user:User;
  @Output() foodValue = new EventEmitter();

  food_value:number;
  constructor() { }

  ngOnInit() {
  }

}
