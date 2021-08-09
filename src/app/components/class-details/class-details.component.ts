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

  inputTeacher : string = "";
  inputSection : string = "";

  ngOnInit(): void {
    this.targetClass = this.classInfo.getTarget();
    this.role = this.userMock.getUserRole();

    if(!!this.targetClass)
    {
      this.inputTeacher  = this.targetClass.teacher;
      this.inputSection = this.targetClass.section;
    }
  }

  onSubmit()
  {
    
  }
}
