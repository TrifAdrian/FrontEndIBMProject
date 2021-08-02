import { Injectable } from '@angular/core';
import { ClassMockService,Class } from './class-mock.service';

@Injectable({
  providedIn: 'root'
})
export class ClassInfoService {

  constructor(private classMock : ClassMockService) { }

  classes : Class[] = [];
  date : Date = new Date();
  public target : number = 0;

  private getMockClasses(): void {
    this.classMock.getArrayClasses(this.date,2)
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
}
