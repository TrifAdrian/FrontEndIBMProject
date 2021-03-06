import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {ClassService} from "./class.service";

@Injectable({
  providedIn: 'root'
})
export class ClassMockService {

  constructor() { }


  teachers = [new Teacher("Teacher","1","Section 1"),
              new Teacher("Teacher","2","Section 2")];


  filterBySection(section : string, teachers : Teacher[] ): Teacher[]
  {
    if(section == null || section == "")
      return teachers;

    let result : Teacher[] = [];
    for(let i = 0;i<= teachers.length;i=i+1)
    {
      if(teachers[i].getSection() == section)
        result.push(teachers[i]);
    }

    return result;
  }
  getArraySections(): Observable<string[]>
  {
    return of(["Section 1","Section 2"]);
  }
  getArrayTeachers(section : string): Observable<Teacher[]>
  {
    let teachers = this.filterBySection(section,this.teachers);
    return of(teachers);
  }

  private getClass(date : Date,id : number) : Class
  {
    return new Class(id, "ClassName"+id, 1,"Section 1",date,"12:00","13:00","Teacher 1","A01",30);
  }

  private getClasses(number : number) : Class[]
  {
    let result : Class[] = [];

    // for(let i : number = 0;i<number;i=i+1)
    // {
    //   result.push(this.getClass(date,i));
    // }

    result.push(this.getClass(new Date("2021-8-2"),0));
    result.push(this.getClass(new Date("2021-8-2"),1));


    result.push(this.getClass(new Date("2021-8-3"),2));
    result.push(this.getClass(new Date("2021-8-3"),3));

    result.push(this.getClass(new Date("2021-8-4"),4));
    result.push(this.getClass(new Date("2021-7-4"),5));

    return result
  }

  getArrayClasses(number : number) : Observable<Class[]>
  {
    return of(this.getClasses(number));
  }
}

export class Class
{
  constructor(
    public id : number,
    public name : string,
    public year : number,
    public section : string,
    public date : Date,
    public start : string,
    public end : string,
    public teacher : string,
    public classroom : string,
    public capacity : number
  )
  {}

  getDate() : string
  {
    let date : Date | undefined = this.date;
    if(date!=null)
      return "" + date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
    return "";
  }

}

export class Teacher
{
  constructor(
    private firstName : string,
    private lastName : string,
    private section : string
  )
  {}

  getSection() : string
  {
    return this.section;
  }

  public toString() : string
  {
    return this.firstName +" "+ this.lastName;
  }
}
