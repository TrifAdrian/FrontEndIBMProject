import { Component, OnInit } from '@angular/core';
import { ClassInfoService } from 'src/app/services/class-info.service';
import { UserMockService} from 'src/app/services/user-mock.service';
import {Class} from "../../objects/class/class";
import {User} from "../../objects/user/user";
import {ClassEnrollStudent} from "../../objects/ClassEnrollStudent/class-enroll-student";
import {ClassService} from "../../services/class.service";

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.css']
})
export class ClassDetailsComponent implements OnInit {

  constructor(private classInfo : ClassInfoService,
              private classService: ClassService) { }

  targetClass : Class | null = null;
  currentUser : User = JSON.parse(localStorage.getItem("loggedUser")!);
  role : string | null = null;

  ngOnInit(): void {
    this.targetClass = this.classInfo.getTarget();
    this.role = this.currentUser.role.toString().toLowerCase();
    this.role=this.role.charAt(0).toUpperCase() + this.role.slice(1);
    console.log(this.role)
  }



  getCapacity() : string
  {
    let capacity : number|undefined=this.targetClass?.classroom?.capacity;
    if(!!capacity)
    {
      return ""+capacity;
    }
    return "";
  }


  enrollStudent(id : number) : void
  {
    let x = new ClassEnrollStudent();
    x.classId=id;
    x.studentId=this.currentUser.id

    console.log(x)

    this.classService.enrollStudent(x).subscribe();
  }
  deleteClass(): void
  {
    this.classService.deleteClass(this.targetClass?.id!).subscribe();
    // window.alert("deleted")
  }




}



