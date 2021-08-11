import { Component, OnInit } from '@angular/core';
import {FeatureService} from "../../services/feature.service";
import {Feature} from "../../objects/feature/feature";
import {Classroom} from "../../objects/classroom/classroom";
import {ClassroomService} from "../../services/classroom.service";
import {ClassService} from "../../services/class.service";
import {Classdetail} from "../../objects/ClassDetail/classdetail";
import {ClassEnrollStudent} from "../../objects/ClassEnrollStudent/class-enroll-student";
import {UserService} from "../../services/user/user.service";
import {User} from "../../objects/user/user";
import {Teacher} from "../../objects/teacher/teacher";

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  feature2 ?: Feature[]
  classrooms ?: Classroom[]
  classroom$ ?: Classroom
  editClassroom !: Classroom
  classroomdummy !: Classroom
  classdummy !: Classdetail
  editclass !: Classdetail
  x !:string
  teststud !: ClassEnrollStudent

  u ?: User[];
  t ?: Teacher[];

  constructor(private featureService : FeatureService,
              private classroomService : ClassroomService,
              private classService:ClassService,
              private userService:UserService
             ) { }

  ngOnInit(): void {
    // this.featureTest();
    // this.classroomTest();
    //this.classTest()
    this.userTest();
  }

  private userTest(): void
  {

    this.userService.getAllUsers().subscribe(x => console.log(x));
    this.userService.getAllTeachers().subscribe(x => console.log(x))

  }

  private featureTest() :void
  {
    //this.featureService.deleteFeatureFromClassroom(1,1).subscribe();

    this.featureService.getClassroomFeaturesById(1)
      .subscribe(
        data => this.feature2=data
      )
  }

  private classroomTest() :void
  {
    ///////////////////////////////////////////////////////////////////////////////

    // this.classroomService.getClassroomById(1).subscribe(x => {this.classroom$ = x
    // console.log(this.classroom$)})
    //
    // this.classroomService.getClassrooms().subscribe(x => this.classrooms =x)

    //this.classroomService.deleteClassroomById(1).subscribe();

    this.editClassroom={
      id:2,
      name:"TestEditare",
      location:"Nowhere",
      capacity:100,
      features_list:[
        {id:1,name:"test_feature"}
      ]
    }

    this.classroomService.updateClassroom(this.editClassroom).subscribe();

    this.classroomdummy={
      id:10,
      name:"smile",
      location:"kek",
      capacity:10,
      features_list:[
        {id:1,name:"test_feature"},
        {id:2,name:"test_feature"}
      ]
    }

    this.classroomService.addClassroom(this.classroomdummy).subscribe();
  }

  private classTest() : void
  {
    //this.classService.deleteClass(1).subscribe()

    this.classService.getClass(2).subscribe(x => console.log(x))
    this.classService.getClasses().subscribe(x => console.log(x))

    let date = new Date("2021-08-08T16:45:02+0000")

    console.log(date)
    //console.log(date.getFullYear(),date.getMonth() + 1,date.getDate(),date.getUTCHours() ,date.getMinutes())

    this.classdummy ={
      name:"Geometry",
      year:3,
      section:"Upt",
      dates:[{
        startTime:date.toISOString(),
        endTime:date.toISOString()
      }],
      classroomId:1,
      teacherId:4
    }

    //console.log(this.classdummy)

   // this.classService.createClass(this.classdummy).subscribe() // error date time thing Must fix ASAP

    this.editclass={
      name:"TestEdit",
      year:2,
      section:"Upt",
      dates:[{
        startTime:date.toISOString(),
        endTime:date.toISOString()
      }],
      classroomId:4,
      teacherId:2
    }

    //this.classService.editClass(1,this.editclass).subscribe()

    this.teststud={
      classId:2,
      studentId:3
    }

    this.classService.enrollStudent(this.teststud).subscribe()



  }


}
