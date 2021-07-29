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
}

export class Class
{
  constructor(
    id : number,
    name : string,
    year : number,
    section : string,
    date : Date,
    teacher : string,
    classroomId : number
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
