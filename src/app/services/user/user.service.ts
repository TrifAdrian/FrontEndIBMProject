import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Teacher} from "../../objects/teacher/teacher";
import {User} from "../../objects/user/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl : string

  constructor(private http:HttpClient) {
    this.userUrl=`${environment.baseUrl}/user`;
  }

  public getAllTeachers() : Observable<Teacher[]>
  {
    return this.http.get<Teacher[]>(`${this.userUrl}/teachers`);
  }

  public getAllUsers(): Observable<User[]>
  {
    return this.http.get<User[]>(this.userUrl)
  }


}
