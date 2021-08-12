import { Injectable } from '@angular/core';
import { ClassMockService, Teacher } from './class-mock.service';
import { DateManageService } from './date-manage.service';
import {ClassService} from "./class.service";
import {Class} from "../objects/class/class";
import { Schedule } from '../objects/schedule/schedule';
import { Classroom } from '../objects/classroom/classroom';


@Injectable({
  providedIn: 'root'
})
export class ClassInfoService {

  public classes : Class[] = [];
  public classEntries : ClassEntry[] = [];
  public matrix : ClassEntry[][] = [];
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
    this.matrix = this.constructClassMatrix();

  }

  private getClassesDB(): void
  {
    this.classService.getClasses().subscribe(x => this.classes = x);
  }

  private getClassEntries(): ClassEntry[]
  {
    this.classes = this.getClassesByWeek();
    let result : ClassEntry[] = [];
    for(let i = 0; i<this.classes.length;i=i+1)
    {
      let dates = this.classes[i].dateList;
      if(!!dates)
      {
        for(let j = 0; j<dates.length;j=j+1)
        {
          result.push(this.constructClassEntry(dates[j],this.classes[i])!);
        }
      }
    }

    return result;
  }

  private constructClassEntry(schedule:Schedule, target : Class) : ClassEntry | undefined
  {
    let startTime = new Date(schedule.startTime);
    let endTime = new Date(schedule.endTime);
    if(this.dateManage.dateInWeek(startTime))
    {
      let result : ClassEntry = new ClassEntry(target.id,
                                               target.name!,
                                               new Date(startTime),
                                               this.getDisplayTime(startTime),
                                               this.getDisplayTime(endTime),
                                               target.classroom!,
                                              target.teacher!);

      return result;
    }
    return undefined;

  }

  private getDisplayTime(date : Date)
  {
    return date.getUTCHours() + ":" + date.getUTCMinutes();
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
    //console.log(result);
    return result;
  }

  getClassesByDay(entries : ClassEntry[],day : number) : ClassEntry[]
  {
    let result : ClassEntry[] = [];
    for(let i : number = 0;i<entries.length; i=i+1)
    {
      //console.log(entries[i].date.getDay() + " " + day);
      if(entries[i].date.getDay() == day)
        result.push(entries[i]);
    }
    return result;
  }

  constructClassMatrix() : ClassEntry[][]
  {
    this.classEntries = this.getClassEntries();
    //console.log(this.classEntries);
    let result : ClassEntry[][] = [];
    for(let i : number = 0;i<this.days.length; i=i+1)
    {
      let entriesForDay = this.getClassesByDay(this.classEntries,this.days[i]);
      result.push(entriesForDay);
    }
    //console.log(result);

    result = this.transposeMatrix(result);
    result = this.deleteUndefinedRow(result);

    return result;
  }

  transposeMatrix(matrix: ClassEntry[][]) : ClassEntry[][]
  {
    let result:ClassEntry[][]=[];
    for(let i=0;i<matrix.length;i++){
      result.push([])
      for(let j=0;j<matrix.length;j++){
          result[i].push(matrix[j][i])
      }
    }
    return result;
  }

  deleteUndefinedRow(matrix : ClassEntry[][]) : ClassEntry[][]
  {
    let result:ClassEntry[][]=[];
    let count = 0
    for(let i=0;i<matrix.length;i++){
      for(let j=0;j<matrix.length;j++){
        if(matrix[i][j]==undefined)
          count=count+1;
      }
      if(count!=matrix[i].length)
        result.push(matrix[i]);
      count=0
    }

    return result;

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

export class ClassEntry
{
  constructor(public id : number,
              public name : string,
              public date : Date,
              public start : string,
              public end : string,
              public classroom : Classroom,
              public teacherName:string
  ){}

}
