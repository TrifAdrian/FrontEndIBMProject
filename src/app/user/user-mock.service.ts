import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserMockService {

  constructor() { }

  getUser():Observable<User>
  {
    return of(this.generateUser());
  }

  getArrayUsers(howMany : number):Observable<User[]>
  {
    return of(this.generateArrayUsers(howMany));
  }

  getArrayRoles():Observable<string[]>
  {
    return of(["Student","Teacher","Admin","sdhkg"]);
  }

  private generateUser() : User
  {
    return this.generateArrayUsers(1)[0];
  }

  private generateArrayUsers(howMany : number) : User[] | any[]
  {
    if(howMany<=0)
      return new Array<User>();
    else if(howMany == 1)
      return  [new User("Department 1", "First Name", "Group 1", 0, "Last Name", "Student", "Section 1", 1)];

    let result : User[] = new Array<User>();
    for(let i : number = 0; i < howMany; i=i+1)
    {
      result.push(new User("Department 1", "First Name", "Group 1", i, "Last Name", "Student", "Section 1", 1));
    }

    return result;
  }

}

export class User { 
  constructor(
    department :	string,
    first_name :	string,
    group : string,
    id : number,
    last_name: string,
    role : string,
    section : string,
    year : number)
  {}

}

