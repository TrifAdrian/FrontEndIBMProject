import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { ClassMockService, Teacher } from 'src/app/services/class-mock.service';
import { FormValidationService } from 'src/app/services/form-validation.service';
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
  inputDate : string="";
  teachers : Teacher[] = [];
  sections : string[] = [];
  start: string="";
  end: string="";

  constructor(private mockUser : UserMockService,
              private classMock : ClassMockService,
              private formValidation: FormValidationService) { }

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

      let args = new Array();   
      args.push(this.inputDate,this.inputName,this.inputSection,
        this.inputTeacher,this.inputYear,this.start,this.end);
        
      this.printValues(args);
      
      console.log(this.formValidation.validTime(this.start));
      console.log(this.formValidation.checkIfDate(new Date(this.inputDate)));
      
  }

  printValues <T>(array : T[])
  {
    for(let i = 0; i<array.length;i=i+1)
    {
      console.log(array[i]);
    }
  }

    
      
}
