import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateManageService {

  constructor() {
    this.defaultDate.setDate(this.firstMonday);
    this.firstMonday = this.findFirstMonday(this.defaultDate); 
    this.defaultDate.setDate(this.firstMonday);
    this.saveToLocal(this.defaultDate);
   }

  private firstMonday = 1; 
  public defaultDate : Date = new Date();

  public refreshDate() : Date
  {
    this.defaultDate = this.getDate();
    return this.defaultDate;
  }

  findFirstMonday(date:Date) : number
  {
    return this.findFirstSpecificDay(date,1);
  }

  findFirstSunday(date:Date) : number
  {
    return this.findFirstSpecificDay(date,0);
  }

  findFirstSpecificDay(date : Date, dayNumber : number) : number
  {
    for(;;date.setDate(date.getDate() + 1))
    {
      if(date.getDay()==dayNumber)
        return date.getDate();
    }
    return 1;
  }

  dateInWeek(date: Date)
  {
    let afterSevenDays : Date = new Date(this.getDate());
    afterSevenDays.setDate(afterSevenDays.getDate() + 7);

    return this.getDate() <= date && date <= afterSevenDays &&
            this.equalMonthYear(date,afterSevenDays);
  }

  equalMonthYear(date1 : Date, date2 : Date) : boolean
  {
    return date1.getMonth() == date2.getMonth() && date1.getFullYear() == date2.getFullYear();
  }

  saveToLocal(date : Date | null): void{
    if(date!=null){
    let result: string = this.dateSaveFormat(date);
    localStorage.setItem("targetDate",result);
    }
  }

  getSavedDate() : string {
    
    if(localStorage.getItem("targetDate") != null)
       return localStorage.getItem("targetDate") as string;
    return "";
  }

  getDate() : Date
  {
    if(localStorage.getItem("targetDate") != null)
      return new Date(this.getSavedDate());
    return this.defaultDate;
  }

  public monthNames:string[]=["January","February","March","April","May","June","July",
  "August","September","October","November","December"];

  public dateDisplayFormat(date : Date | null):string{
    if(date!=null)
      return date.getDate() +' / '+(this.monthNames[date.getMonth()])+' / '+date.getFullYear();
    return"";
  }

  public dateSaveFormat(date : Date)
  {
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  }
}
