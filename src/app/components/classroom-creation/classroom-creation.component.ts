import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit, Input } from '@angular/core';
import { ClassInfoService } from 'src/app/services/class-info.service';
// import { ClassMockService, Teacher, Class } from 'src/app/services/class-mock.service';
import { FormValidationService } from 'src/app/services/form-validation.service';
import { UserMockService } from 'src/app/services/user-mock.service';
import {ClassService} from "../../services/class.service";
import {Class} from "../../objects/class/class"
import {Classdetail} from "../../objects/ClassDetail/classdetail";
import {ClassroomService} from "../../services/classroom.service";
import {Classroom} from "../../objects/classroom/classroom";
import {Observable} from "rxjs";
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {Schedule} from "../../objects/schedule/schedule";
import {Teacher} from "../../objects/teacher/teacher";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-classroom-creation',
  templateUrl: './classroom-creation.component.html',
  styleUrls: ['./classroom-creation.component.css','../toolbar/toolbar.component.css']
})
export class ClassroomCreationComponent implements OnInit {

  @Input() purpose : string|null = null;

  ngOnInit(): void {
  }

}
