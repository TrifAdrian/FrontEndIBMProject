import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit, Input } from '@angular/core';
import { ClassInfoService } from 'src/app/services/class-info.service';
// import { ClassMockService, Teacher, Class } from 'src/app/services/class-mock.service';
import { FormValidationService } from 'src/app/services/form-validation.service';
import { UserMockService } from 'src/app/services/user-mock.service';
import {ClassService} from "../../services/class.service";
import {Class} from "../../objects/class/class"
import {Classdetail} from "../../objects/ClassDetail/classdetail";
import {ClassroomService} from "../../services/classroom.service";
import {Classroom} from "../../objects/classroom/classroom";
import {Observable} from "rxjs";
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {Schedule} from "../../objects/schedule/schedule";
import {Teacher} from "../../objects/teacher/teacher";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-class-creation',
  templateUrl: './class-creation.component.html',
  styleUrls: ['./class-creation.component.css','../toolbar/toolbar.component.css']
})
export class ClassCreationComponent implements OnInit {

  @Input() purpose : string|null = null;
  //targetClass : Class|null = null;

  inputName : string = "";
  inputYear : string = "";
  inputSection : string = "";
  inputTeacher !: number;
  // inputCapacity : string = "";
  inputClassroom : string="";
  teachers : Teacher[] = [];
  sections : string[] = [];
  start!: {hour:number,minute:number};
  end!: {hour:number,minute:number};
  classroomList ?: Classroom[];
  sectionList !: string[]

  createClass !: Classdetail;

  //Prevent Duplicate form submission
  formSubmitted : boolean = false;
  inputDate!:NgbDateStruct;

  constructor(
              private classInfo : ClassInfoService,
              private formValidation: FormValidationService,
              private classService:ClassService,
              private classroomService:ClassroomService,
              private userService:UserService)
  {
    this.classroomService.getClassrooms().subscribe(x => this.classroomList = x);
    this.userService.getAllTeachers().subscribe(y=> this.teachers = y);


  }

  ngOnInit(): void {
  }

  onSubmit() : void{

    if(!this.formSubmitted)
    {
        this.createClass={
        name:this.inputName,
        year:parseInt(this.inputYear),
        section: this.inputSection,
        dates:[this.buildSchedule()],
        teacherId : this.inputTeacher,
        classroomId : parseInt(this.inputClassroom)
      }

      this.classService.createClass(this.createClass).subscribe();
      console.log(this.createClass);
    }

    this.formSubmitted = ! this.formSubmitted;
  }

  private buildSchedule() : Schedule
  {
    let schedule : Schedule = new Schedule();
    let date = new Date(Date.UTC(this.inputDate.year,this.inputDate.month-1,this.inputDate.day));
    date.setUTCHours(this.start.hour);
    date.setUTCMinutes(this.start.minute);

    //console.log(date);

    schedule.startTime=date.toISOString();

    date.setUTCHours(this.end.hour);
    date.setUTCMinutes(this.end.minute);

    // console.log(date);

    schedule.endTime=date.toISOString();

    return schedule;
  }



}
