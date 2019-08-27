export class AppUtil{
 static getAmount(amount:String){
    return parseInt(amount.replace(/\D/g,''));
 }
}