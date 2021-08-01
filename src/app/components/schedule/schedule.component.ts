import { Component, OnInit } from '@angular/core';
import { ToolbarToggleService } from 'src/app/services/toolbar-toggle.service';
import { ClassMockService,Class } from 'src/app/services/class-mock.service';
import { ClassInfoService } from 'src/app/services/class-info.service';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private toggleService : ToolbarToggleService,
              private classMock : ClassMockService,
              private classInfo : ClassInfoService 
              ){}
  
  ngOnInit(): void {
    this.classes = this.classInfo.mockClasses();
    this.whatToDisplay = this.toggleService.activeWindow;
  }

  classes : Class [] = [];

  date : Date = new Date();

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

  
  

}
