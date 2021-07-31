import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CalendarView, CalendarEvent, DAYS_OF_WEEK } from 'angular-calendar';

@Component({
  selector: 'app-schedule',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }

  view: CalendarView = CalendarView.Week;
  
  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    
  ];


  excludeDays: number[] = [0, 6];
  weekStartsOn = DAYS_OF_WEEK.SUNDAY;
  CalendarView = CalendarView;
  
  

}
