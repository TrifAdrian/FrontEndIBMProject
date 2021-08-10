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
              private userMock : UserMockService) { }

  targetClass : Class | null = null;
  role : string | null = null;

  ngOnInit(): void {
    this.targetClass = this.classInfo.getTarget();
    this.role = this.userMock.getUserRole();
  }




  
}

  

