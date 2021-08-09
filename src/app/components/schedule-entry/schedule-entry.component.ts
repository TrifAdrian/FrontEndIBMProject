import { Component, Input, OnInit } from '@angular/core';
import { ClassMockService,Class } from 'src/app/services/class-mock.service';
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

  constructor() {}

  ngOnInit(): void {
    this.start=this.classroom?.start;
    this.end=this.classroom?.end;
    this.name=this.classroom?.name;
    this.room=this.classroom?.classroom;
  }

}
