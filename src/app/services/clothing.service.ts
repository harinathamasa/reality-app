import { ClothingData } from './../models/clothing';
import { AppUtil } from './../models/util';
import { Injectable } from '@angular/core';
import data from 'src/assets/data/Clothing.json'
@Injectable({
  providedIn: 'root'
})
export class ClothingService {
 
  clothingArray:Array<ClothingData>=[];
  userClothing:ClothingData;
  constructor() {
    for(var i=0;i<data.length;i++){
      let clothingObj = new ClothingData(data[i]['Net Monthly Income'],AppUtil.getAmount(data[i]['Thrift Store']),AppUtil.getAmount(data[i]['Department Store']),AppUtil.getAmount(data[i]['Designer']));
      this.clothingArray.push(clothingObj);
    }
   }

  public getClothingInfo(){
    return this.clothingArray;
  }

  public getUserClothingInfo(netMonthly:number){
    for(var i=0;i<this.clothingArray.length;i++){
      var salaryBounds = this.clothingArray[i].netMonthlyIncome.split(' - ');
      var lowerBound = AppUtil.getAmount(salaryBounds[0]);
      var upperBound = AppUtil.getAmount(salaryBounds[1]);
      if(netMonthly<=upperBound && netMonthly>=lowerBound){
        this.userClothing = this.clothingArray[i];
      }
    }
    return  this.userClothing;
  }

}
