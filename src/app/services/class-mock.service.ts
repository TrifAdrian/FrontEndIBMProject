import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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
    return new Class(id, "ClassName", 1,"Section 1",date,"12","13","Teacher 1","A01",30);
  }

  private getClasses(date : Date, number : number) : Class[]
  {
    let result : Class[] = [];
    for(let i : number = 0;i<number;i=i+1)
    {
      result.push(this.getClass(date,i));
    }

    return result
  }

  getArrayClasses(date : Date, number : number) : Observable<Class[]>
  {
    return of(this.getClasses(date,number));
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

  public toString()
  {
    return this.firstName +" "+ this.lastName;
  }
}
