import { Component, OnInit } from '@angular/core';
import {FeatureService} from "../../services/feature.service";
import {Feature} from "../../objects/feature/feature";
import {Classroom} from "../../objects/classroom/classroom";
import {ClassroomService} from "../../services/classroom.service";
import {delay, Observable} from "rxjs";
import {ClassService} from "../../services/class.service";
import {Classdetail} from "../../objects/ClassDetail/classdetail";
import {formatDate} from "@angular/common";
import {Class} from "../../objects/class/class";

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

  constructor(private featureService : FeatureService,private classroomService : ClassroomService,private classService:ClassService) { }

  ngOnInit(): void {
    // this.featureTest();
    // this.classroomTest();
    this.classTest()
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



    this.classdummy ={
      name:"Geometry",
      year:3,
      section:"Upt",
      dates:[],
      classroomId:1,
      teacherId:4
    }

    this.classService.createClass(this.classdummy).subscribe() // error date time thing Must fix ASAP

    this.editclass={
      name:"TestEdit",
      section:"Upt",
      dates:[],
      classroomId:4,
      teacherId:1
    }



  }


}
