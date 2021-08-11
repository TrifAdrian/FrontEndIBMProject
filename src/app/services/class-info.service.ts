import { Injectable } from '@angular/core';
import { ClassMockService, Teacher } from './class-mock.service';
import { DateManageService } from './date-manage.service';
import {ClassService} from "./class.service";
import {Class} from "../objects/class/class";
import { Schedule } from '../objects/schedule/schedule';


@Injectable({
  providedIn: 'root'
})
export class ClassInfoService {

  public classes : Class[] = [];
  public teachers : Teacher[] = [];
  public sections : string[] = [];
  public days:number[] = [1, 2, 3, 4, 5];
  public target : number = 0;


  constructor(private classMock : ClassMockService,
              private dateManage : DateManageService,
              private classService : ClassService) {
    this.refreshClasses();
    this.getMockSections();
    this.getMockTeachers();
  }

  public refreshClasses()
  {
    this.getClassesDB();
    this.classes = this.getClassesByWeek();
  }

  public getStart(target : Class, date : Date)
  {
    if(target.dateList !== undefined )
    {
      for(let i = 0 ; i < target.dateList.length;i=i+1)
      {
        if(this.dateManage.getMatchingDate(this.getClassDates(target)))

      }
    }
  }


  private getClassesDB(): void
  {
    this.classService.getClasses().subscribe(x => this.classes = x);
  }

  getClassDates(target:Class) : Date[]
  {
    let result : Date[] = [];
    if(target.dateList !== undefined )
    {
      for(let i = 0; i<target.dateList.length; i++)
      {
        result.push(new Date(target.dateList[i].startTime));
      }
    }

    return result;
  }

  getClassByID(target : number) : Class | null
  {
    this.getClassesDB();
    for(let i : number = 0; i<this.classes.length; i=i+1)
    {
      if(this.classes[i].id == target)
        return this.classes[i];
    }
    return null;
  }

  getTarget() : Class | null
  {
    return this.getClassByID(this.target);
  }

  getClassesByWeek()
  {
    let result : Class[] = [];

    for(let i : number = 0;i<this.classes.length; i=i+1)
    {
      if(this.dateManage.anyDateInWeek(this.getClassDates(this.classes[i])))
          result.push(this.classes[i]);
    }
    return result;
  }

  getClassesByDay(day : number) : Class[]
  {
    let result : Class[] = [];
    console.log(this.classes);
    for(let i : number = 0;i<this.classes.length; i=i+1)
    {
      for(let j = 0 ; this.classes[i].dateList?.length; j = j + 1)
      {
        if(this.classes[i].dateList !== undefined && 
           this.doesClassDayMatch(this.classes[i],day))
        result.push(this.classes[i]);
      }
    }
    console.log(result);
    return result;
  }

  doesClassDayMatch(target : Class, day : number) : boolean
  {
    let matchingDate = this.dateManage.getMatchingDate(this.getClassDates(target));
    if(matchingDate != null)
      return matchingDate.getDay() == day;
    return false;
  }

  constructClassMatrix() : Class[][]
  {
    let result : Class[][] = [];
    for(let i : number = 0;i<this.days.length; i=i+1)
    {
      result.push(this.getClassesByDay(this.days[i]));
    }

    result = this.transposeMatrix(result);
    return result;
  }

  transposeMatrix(mat: Class[][])
  {
    return mat[0].map((_, colIndex) => mat.map(row => row[colIndex]));
  }

  getMockTeachers(): void {
    this.classMock.getArrayTeachers("")
    .subscribe(teachers => this.teachers = teachers);
  }

  getMockSections(): void {
    this.classMock.getArraySections()
    .subscribe(sections => this.sections = sections);
  }

    /*
  private getMockClasses(): void {
    this.classMock.getArrayClasses(3)
    .subscribe(classes => this.classes = classes);
  }
  */
}
