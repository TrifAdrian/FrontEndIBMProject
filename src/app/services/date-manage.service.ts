import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateManageService {

  constructor() { }

  saveToLocal(date : Date | null): void{
    if(date!=null){
    let result: string= date?.getFullYear()+ '-'+ (date?.getMonth()+1)+'-'+date?.getDate();
    localStorage.setItem("targetDate",result);
    }
  }

  getDate() : string {
    
    if(localStorage.getItem("targetDate") != null)
    {
       return localStorage.getItem("targetDate") as string;
     
    }
    return "";
  }
}
