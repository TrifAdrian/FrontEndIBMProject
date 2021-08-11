import {Component, Input, OnInit} from '@angular/core';
import {ClassroomService} from "../../services/classroom.service";
import {Classroom} from "../../objects/classroom/classroom";
import {Feature} from "../../objects/feature/feature";

@Component({
  selector: 'app-classroom-creation',
  templateUrl: './classroom-creation.component.html',
  styleUrls: ['./classroom-creation.component.css','../toolbar/toolbar.component.css']
})
export class ClassroomCreationComponent implements OnInit {

  inputLocation !: string;
  inputName !: string;
  inputCapacity !: string;
  inputFeature :string ="";
  featureList :Feature[] = [];
  i : number = 0
  formSubmitted : boolean = false;

  constructor(private classroomService:ClassroomService) { }

  ngOnInit(): void {
    this.i=0;
  }

  onSubmit() :void
  {

      if(!this.formSubmitted) {
        let createClassroom = new Classroom();
        createClassroom.id = 0;
        createClassroom.name = this.inputName;
        createClassroom.location = this.inputLocation;
        createClassroom.capacity = parseInt(this.inputCapacity);
        createClassroom.features_list = this.featureList;

        console.log(createClassroom);
        this.classroomService.addClassroom(createClassroom).subscribe();
    }

      this.formSubmitted = ! this.formSubmitted
  }

  addFeature() :void{
    let f : Feature = new Feature()
    f.id=this.i
    f.name=this.inputFeature.trim();
    console.log(f)
    this.featureList.push(f)
    this.resetField()
  }

   deleteFeature(index : number)
  {
    this.i--;
    this.featureList=this.featureList.filter(x => x.id != index)
  }

  resetField(){
    this.i++;
    this.inputFeature=" "
  }

}
