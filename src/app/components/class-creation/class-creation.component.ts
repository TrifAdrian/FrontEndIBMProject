import { Component, OnInit } from '@angular/core';
import { ClassMockService, Teacher } from 'src/app/services/class-mock.service';
import { UserMockService } from 'src/app/services/user-mock.service';

@Component({
  selector: 'app-class-creation',
  templateUrl: './class-creation.component.html',
  styleUrls: ['./class-creation.component.css','../toolbar/toolbar.component.css']
})
export class ClassCreationComponent implements OnInit {

  inputName : string = "";
  inputYear : string = "";
  inputSection : string = "";
  inputTeacher : string = "";
  teachers : Teacher[] = [];
  sections : string[] = [];

  constructor(private mockUser : UserMockService, private classMock : ClassMockService) { }

  ngOnInit(): void {
    this.getMockTeachers();
    this.getMockSections();
  }

  getMockTeachers(): void {
    this.classMock.getArrayTeachers("")
    .subscribe(teachers => this.teachers = teachers);
  }

  getMockSections(): void {
    this.classMock.getArraySections()
    .subscribe(sections => this.sections = sections);
  }

  onSubmit() : void{

  }

}
