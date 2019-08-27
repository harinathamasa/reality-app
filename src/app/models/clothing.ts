export class ClothingData{
    netMonthlyIncome:String;
    thirftStore:number;
    departmentStore:number;
    designer:number;
    constructor(netMonthlyIncome:String,thirftStore:number,departmentStore:number,designer:number){
        this.netMonthlyIncome  =netMonthlyIncome;
        this.thirftStore =  thirftStore;
        this.departmentStore = departmentStore;
        this.designer = designer; 
    }
}