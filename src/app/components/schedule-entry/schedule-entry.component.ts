import { Component, Input, OnInit } from '@angular/core';
import { ClassEntry } from 'src/app/services/class-info.service';
import {ClassService} from "../../services/class.service";


@Component({
  selector: 'app-schedule-entry',
  templateUrl: './schedule-entry.component.html',
  styleUrls: ['./schedule-entry.component.css']
})
export class ScheduleEntryComponent implements OnInit {

  @Input() classroom : ClassEntry|null = null;
  @Input() classId !: number;
  start : string | undefined = "";
  end : string | undefined = "";
  name : string | undefined = "";
  room : string | undefined = "";
  teacher !: string

  constructor(private classService:ClassService) {}

  ngOnInit(): void {
    this.start=this.classroom?.start;
    this.end=this.classroom?.end;
    this.name=this.classroom?.name;
    this.room=this.classroom?.classroom.name;
  }




}
