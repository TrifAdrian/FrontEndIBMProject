import { Component, Input, OnInit } from '@angular/core';
import { ClassEntry } from 'src/app/services/class-info.service';


@Component({
  selector: 'app-schedule-entry',
  templateUrl: './schedule-entry.component.html',
  styleUrls: ['./schedule-entry.component.css']
})
export class ScheduleEntryComponent implements OnInit {

  @Input() classroom : ClassEntry|null = null;
  start : string | undefined = "";
  end : string | undefined = "";
  name : string | undefined = "";
  room : string | undefined = "";
  teacher !: string

  constructor() {}

  ngOnInit(): void {
    this.start=this.classroom?.start;
    this.end=this.classroom?.end;
    this.name=this.classroom?.name;
    this.room=this.classroom?.classroom.name;
  }

}
