import { Component, OnInit } from '@angular/core';
import {FeatureService} from "../../services/feature.service";
import {Feature} from "../../objects/feature/feature";
import {Classroom} from "../../objects/classroom/classroom";
import {ClassroomService} from "../../services/classroom.service";
import {Observable} from "rxjs";

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

  constructor(private featureService : FeatureService,private classroomService : ClassroomService) { }

  ngOnInit(): void {
    //this.featureService.deleteFeatureFromClassroom(1,1).subscribe();

    this.featureService.getClassroomFeaturesById(1)
      .subscribe(
        data => this.feature2=data
      )

    //Classroooom
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



}
