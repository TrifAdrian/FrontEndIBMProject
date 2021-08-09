import { Component, OnInit } from '@angular/core';
import { ClassInfoService } from 'src/app/services/class-info.service';
import { ClassMockService,Class,Teacher } from 'src/app/services/class-mock.service';
import { FormValidationService } from 'src/app/services/form-validation.service';
import { UserMockService} from 'src/app/services/user-mock.service';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.css']
})
export class ClassDetailsComponent implements OnInit {

  constructor(private classInfo : ClassInfoService, 
              private userMock : UserMockService,
              private classMockService : ClassMockService,
              private formValidation : FormValidationService) { }

  targetClass : Class | null = null;
  role : string | null = null;
  teachers : Teacher[] = this.classInfo.teachers;
  sections : string[] = this.classInfo.sections;
  className: string = "";
  classYear: string="";
  classDate: string="";
  classStart: string="";
  classEnd: string="";
  classCapacity: string="";

  inputTeacher : string = "";
  inputSection : string = "";

  ngOnInit(): void {
    this.targetClass = this.classInfo.getTarget();
    this.role = this.userMock.getUserRole();
    this.loadDefaulfInputs();
  }

  loadDefaulfInputs(){
    if(!!this.targetClass){
        this.className=this.targetClass?.name;
        this.classDate=this.targetClass?.getDate();
        this.classYear=""+this.targetClass.year;
        this.inputSection=this.targetClass.section;
        this.inputTeacher=this.targetClass.teacher;
        this.classCapacity=""+this.targetClass.capacity;
        this.classEnd=this.targetClass.end;
        this.classStart=this.targetClass.start;

    }
  }

  onSubmit()
  {
    let args = new Array();   
      args.push(this.className, this.classYear,this.inputSection,
        this.inputTeacher,this.classDate,this.classStart,this.classEnd);
        
      this.printValues(args);
      
      console.log(this.formValidation.validTime(this.classStart));
      console.log(this.formValidation.checkIfDate(new Date(this.classEnd)));
      
  }

  printValues <T>(array : T[])
  {
    for(let i = 0; i<array.length;i=i+1)
    {
      console.log(array[i]);
    }
  }

  
}

  

