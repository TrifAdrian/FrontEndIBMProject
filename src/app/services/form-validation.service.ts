import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }
  validDate(date: Date):boolean{
    let actualDate = new Date(date);
    if(this.checkIfDate(actualDate))
    return true;

    return false;
  }
  
  checkIfDate(date: Date): boolean{
    return date.getTime() === date.getTime();
   
  }  
  validTime(hour: string):boolean{
    let parts: string[];
    parts=hour.split(":");
    if(parts.length==2 && this.isNumeric(parts[0]) && this.isNumeric(parts[1])){
    let hours: number=Number(parts[0]);
    let minutes: number=Number(parts[1]);
      
    if(hours<24 && hours>8 && minutes<=59 && minutes>=0)
      return true;

     
      return false;
    
  }
  return false;
}

  isNumeric(input: string):boolean{
    if(isNaN(Number(input)))
    return false;
      
    return true;
  }

  checkCreateForm(args : string[], start : string, inputDate : string):void{
  
  this.printValues(args);
      
  console.log(this.validTime(start));
  console.log(this.checkIfDate(new Date(inputDate)));
      
  }

  printValues <T>(array : T[])
  {
    for(let i = 0; i<array.length;i=i+1)
    {
      console.log(array[i]);
    }
  }

}
