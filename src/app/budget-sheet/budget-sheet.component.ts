import { User } from './../models/user-details';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-sheet',
  templateUrl: './budget-sheet.component.html',
  styleUrls: ['./budget-sheet.component.css']
})
export class BudgetSheetComponent implements OnInit {

  status = [{ name: "Single", value: "single" }, { name: "Married", value: "married" }];
  show: boolean = true;
  isReadOnly: boolean = false;
  budgetLeft: number;
  clothingFlag: boolean = false;
  clothing: number;
  user = {
    "occupation": "",
    "creditScore": 0,
    "annualIncome": 0,
    "netMonthly": 0,
    "children": 0,
    "maritalStatus": ""
  };

  constructor() { }

  ngOnInit() {
  }

  save(userDetails: User) {
    this.user = userDetails;
    this.budgetLeft = this.user.netMonthly;
    console.log("User options.." + JSON.stringify(this.user));
    this.show = false;
    this.isReadOnly = true;

  }

  getClothingData(amount) {
    if (this.clothingFlag) {
      this.budgetLeft = this.budgetLeft + this.clothing;
    }
    this.clothing = parseInt(amount);
    this.budgetLeft = this.budgetLeft - this.clothing;
    this.clothingFlag = true;
  }

  getEntertainmentData() {

  }

  getFoodData() {

  }
  getHousingData() {

  }
  getInsuranceData() {

  }

}