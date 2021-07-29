import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserMockService {

  constructor() { }

<<<<<<< HEAD
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

=======
>>>>>>> 123abfa13d24fc4172096646fce46cd17736cb7c
  getArrayRoles():Observable<string[]>
  {
    return of(["Student","Teacher","Admin"]);
  }
<<<<<<< HEAD
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
=======

>>>>>>> 123abfa13d24fc4172096646fce46cd17736cb7c
}

