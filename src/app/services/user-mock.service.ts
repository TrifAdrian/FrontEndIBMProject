import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserMockService {

  constructor() { }
  user : User = new User("","","");
  
  getSavedUser() : User{
    if(localStorage.getItem("mockUser") != null)
      return JSON.parse(localStorage.getItem("mockUser") || "{}");
    return new User("","","");
  }

  saveToLocal(user : User): void{
    localStorage.setItem("mockUser",JSON.stringify(user));
  }

  getUserRole() : string | null{
    if(localStorage.getItem("mockUser") != null)
    {
      var user : User = JSON.parse(localStorage.getItem("mockUser") || "{}");
      return user.role;
    }
    return null;
  }

  getUserName(): string | null{
    if(localStorage.getItem("mockUser") != null)
    {
      var user : User = JSON.parse(localStorage.getItem("mockUser") || "{}");
      return user.firstName + " " + user.lastName;
    }
    return null;

  }

  getArrayRoles():Observable<string[]>
  {
    return of(["Student","Teacher","Admin"]);
  }
}

export class User{
  constructor(
    public firstName :string|null,
    public lastName : string|null,
    public role : string|null
    )
  {}

  hasEmptyFields() : boolean
  {
    return this.empty(this.firstName) || this.empty(this.lastName) || this.empty(this.role);
  }

  empty(arg:string|null) : boolean
  {
    return arg == null || arg == "";

  }
}

