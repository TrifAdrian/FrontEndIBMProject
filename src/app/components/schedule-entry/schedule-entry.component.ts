import { Component, Input, OnInit } from '@angular/core';
import { Class } from 'src/app/objects/class/class';
import { ClassInfoService } from 'src/app/services/class-info.service';
import { ClassMockService} from 'src/app/services/class-mock.service';
import { DateManageService } from 'src/app/services/date-manage.service';
import { ClassCreationComponent } from '../class-creation/class-creation.component';

@Component({
  selector: 'app-schedule-entry',
  templateUrl: './schedule-entry.component.html',
  styleUrls: ['./schedule-entry.component.css']
})
export class ScheduleEntryComponent implements OnInit {

  @Input() classroom : Class|null = null;
  start : string | undefined = "";
  end : string | undefined = "";
  name : string | undefined = "";
  room : string | undefined = "";

  constructor(private dateManageService : DateManageService,
              private classInfoService : ClassInfoService) {}

  matchingDate : Date | null = new Date();

  ngOnInit(): void {
    if(this.classroom != null)
      this.matchingDate = this.getMatchingDateForClass(this.classroom);

    if(this.matchingDate != null)
    {
      this.start=0;
      this.end=this.classroom?.end;
    }
    this.name=this.classroom?.name;
    this.room=this.classroom?.classroom;

  }

  getHourMinutes(date : Date) : String
  {
    return date.getHours() + "" + date.getMinutes();
  }

  getMatchingDateForClass(target : Class) : Date | null
  {
    return this.dateManageService.getMatchingDate(this.classInfoService.getClassDates(target));
  }
}
