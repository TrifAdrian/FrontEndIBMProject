import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit, Input } from '@angular/core';
import { ClassInfoService } from 'src/app/services/class-info.service';
import { ClassMockService, Teacher, Class } from 'src/app/services/class-mock.service';
import { FormValidationService } from 'src/app/services/form-validation.service';
import { UserMockService } from 'src/app/services/user-mock.service';
@Component({
  selector: 'app-class-creation',
  templateUrl: './class-creation.component.html',
  styleUrls: ['./class-creation.component.css','../toolbar/toolbar.component.css']
})
export class ClassCreationComponent implements OnInit {

  @Input() purpose : string|null = null;
  targetClass : Class|null = null;

  inputName : string = "";
  inputYear : string = "";
  inputSection : string = "";
  inputTeacher : string = "";
  inputCapacity : string = "";
  inputDate : string="";
  teachers : Teacher[] = [];
  sections : string[] = [];
  start: string="";
  end: string="";

  //Prevent Duplicate form submission
  formSubmitted : boolean = false;

  constructor(private classMock : ClassMockService,
              private classInfo : ClassInfoService,
              private formValidation: FormValidationService
              ) { }

  ngOnInit(): void {
    this.getMockTeachers();
    this.getMockSections();
    if(this.purpose=="editClass")
    {
      this.targetClass = this.classInfo.getTarget();
      this.loadDefaultInputs();
    }
  }

  loadDefaultInputs(){
    if(!!this.targetClass){
        this.inputName=this.targetClass?.name;
        this.inputDate=this.targetClass?.getDate();
        this.inputYear=""+this.targetClass.year;
        this.inputSection=this.targetClass.section;
        this.inputTeacher=this.targetClass.teacher;
        this.inputCapacity=""+this.targetClass.capacity;
        this.start=this.targetClass.end;
        this.end=this.targetClass.start;

    }
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

    console.log(this.purpose);
    if(!this.formSubmitted)
    {
      let args = new Array();   
      args.push(this.inputDate,this.inputName,this.inputSection,
        this.inputTeacher,this.inputYear,this.start,this.end);
      
      this.formValidation.checkCreateForm(args,this.start,this.inputDate);
    }

    this.formSubmitted = ! this.formSubmitted;
  }

    
      
}
