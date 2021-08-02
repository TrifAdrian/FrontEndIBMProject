import {Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
    datetime = new Date(); 
    currentdate=new Date(this.datetime.getFullYear(), this.datetime.getMonth(), this.datetime.getDate())

   //date = this.currentdate.getDate() +'/'+(this.currentdate.getMonth()+1)+'/'+this.currentdate.getFullYear();

   previousbtn(currentdate:Date){
   }

   next(currentdate:Date){
  }


}

