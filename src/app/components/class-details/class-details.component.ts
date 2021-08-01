import { Component, OnInit } from '@angular/core';
import { ClassInfoService } from 'src/app/services/class-info.service';
import { ClassMockService,Class } from 'src/app/services/class-mock.service';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.css']
})
export class ClassDetailsComponent implements OnInit {

  constructor(private classInfo : ClassInfoService) { }

  targetClass : Class | null = null;

  ngOnInit(): void {
    this.targetClass = this.classInfo.getTarget();
    console.log(this.targetClass?.id);
  }

}
