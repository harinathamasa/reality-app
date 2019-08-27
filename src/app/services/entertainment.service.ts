import { EntertainmentData } from './../models/entertainment';
import { Injectable } from '@angular/core';
import data from 'src/assets/data/Entertainment.json';
@Injectable({
  providedIn: 'root'
})
export class EntertainmentService {

  private entertainmentArray:Array<EntertainmentData>=[];
  constructor() {
    for(var i=0;i<data.length;i++){
      let entertainmentObj = new EntertainmentData(data[i]['Luxury']['PriviIege'],data[i]['Cost Per Month']);
      this.entertainmentArray.push(entertainmentObj);
    }
   }

   getEntertainmentData(){
     console.log('data inside get..'+JSON.stringify(this.entertainmentArray));
     return this.entertainmentArray;
   }

}
