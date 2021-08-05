import { Injectable } from '@angular/core';
import { ClassMockService,Class } from './class-mock.service';
import { DateManageService } from './date-manage.service';

@Injectable({
  providedIn: 'root'
})
export class ClassInfoService {

  classes : Class[] = this.mockClasses();
  days:number[] = [1, 2, 3, 4, 5];


  constructor(private classMock : ClassMockService, private dateManage : DateManageService) {
    this.refreshClasses()
  }

  public refreshClasses()
  {
    this.getMockClasses();
    this.classes = this.getClassesByWeek();
  }

  public target : number = 0;

  private getMockClasses(): void {
    this.classMock.getArrayClasses(2)
    .subscribe(classes => this.classes = classes);
  }

  getClassByID(target : number) : Class | null
  {
    this.getMockClasses();
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

  mockClasses(): Class[]
  {
    this.getMockClasses();
    return this.classes;
  }

  getClassesByWeek()
  {
    let result : Class[] = [];

    for(let i : number = 0;i<this.classes.length; i=i+1)
    {
      if(this.dateManage.dateInWeek(this.classes[i].date))
          result.push(this.classes[i]);
    }
    return result;
  }

  getClassesByDay(day : number) : Class[]
  {
    let result : Class[] = [];
    for(let i : number = 0;i<this.classes.length; i=i+1)
    {
      if(this.classes[i].date.getDay()==day)
        result.push(this.classes[i]);
    }
    return result;
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
}
