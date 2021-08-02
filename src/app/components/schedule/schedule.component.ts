import { Component, OnInit } from '@angular/core';
import { ToolbarToggleService } from 'src/app/services/toolbar-toggle.service';
import { ClassMockService,Class } from 'src/app/services/class-mock.service';
import { ClassInfoService } from 'src/app/services/class-info.service';
import { DateManageService } from 'src/app/services/date-manage.service';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private toggleService : ToolbarToggleService,
              private classMock : ClassMockService,
              private classInfo : ClassInfoService,
              private dateManage: DateManageService
              ){}
  
  ngOnInit(): void {
    this.classes = this.classInfo.mockClasses();
    this.whatToDisplay = this.toggleService.activeWindow;
    if(this.dateManage.getDate()==null)
      this.date=new Date();
    else
      this.date=new Date(this.dateManage.getDate());
  }
  monthNames:string[]=["January","February","March","April","May","June","July",
  "August","September","October","November","December"];
  classes : Class [] = [];

  date : Date|null = new Date();
  whatToDisplay : string = "";

  toggle(name : string)
  {
    this.toggleService.toggleWindow(name);
    this.ngOnInit();
  }

  displayClass(id : number) : void{
    this.classInfo.target=id;
    this.toggle("classInfo");
  }

   previousWeek(){
    if(this.date!=null){
      this.date.setDate(this.date.getDate()-7);  
  
      this.dateManage.saveToLocal(this.date);
      this.ngOnInit();
     }

   }

   nextWeek(){
    if(this.date!=null){
    this.date.setDate(this.date.getDate()+7);  

    this.dateManage.saveToLocal(this.date);
    this.ngOnInit();
   }
  }

  generateMonth():string{
    if(this.date!=null)
    return this.date.getDate() +' / '+(this.monthNames[this.date.getMonth()])+' / '+this.date.getFullYear();
    return"";
  }

}

