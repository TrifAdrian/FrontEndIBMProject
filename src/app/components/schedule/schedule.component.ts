import { Component, OnInit } from '@angular/core';
import { ToolbarToggleService } from 'src/app/services/toolbar-toggle.service';
import { Class } from 'src/app/services/class-mock.service';
import { ClassInfoService } from 'src/app/services/class-info.service';
import { DateManageService } from 'src/app/services/date-manage.service';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private toggleService : ToolbarToggleService,
              private classInfo : ClassInfoService,
              private dateManage: DateManageService
              ){}

  ngOnInit(): void {
    this.whatToDisplay = this.toggleService.activeWindow;

    this.refreshDate();

    this.refreshClasses();
  }

  refreshDate() : void
  {
    this.date = this.dateManage.getDate();
    this.dateDisplay = this.dateManage.dateDisplayFormat(this.date);
  }

  refreshClasses() : void
  {
   this.classInfo.refreshClasses();
   this.classesMatrix = this.classInfo.constructClassMatrix();
  }
  
  classesMatrix : Class[][]=[];

  date : Date|null = new Date();
  dateDisplay : string = "";
  whatToDisplay : string = "";

  days:number[] = [1, 2, 3, 4, 5];

  toggle(name : string)
  {
    this.toggleService.toggleWindow(name);
    this.ngOnInit();
  }
  
  displayClass(id : number) : void{
    this.classInfo.target=id;
    this.toggle("classInfo");
  }

  nextWeek() : void
  {
    this.dateManage.nextWeek();
    this.refreshDate();
    this.ngOnInit();
  }

  previousWeek() : void
  {
    this.dateManage.previousWeek();
    this.refreshDate();
    this.ngOnInit()
  }


  }



