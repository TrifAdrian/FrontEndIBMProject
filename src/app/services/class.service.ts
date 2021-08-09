import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Class} from "../objects/class/class";
import {Classdetail} from "../objects/ClassDetail/classdetail";
import {ClassEnrollStudent} from "../objects/ClassEnrollStudent/class-enroll-student";

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  private classUrl : string

  constructor(private http:HttpClient) {
    this.classUrl=`${environment.baseUrl}/class`
  }

  public getClasses() :Observable<Class[]>
  {
    return this.http.get<Class[]>(this.classUrl);
  }

  public getClass(id : number) : Observable<Class>
  {
    return this.http.get<Class>(`${this.classUrl}/${id}`);
  }

  public deleteClass(id : number) : Observable<Class>
  {
    console.log(`Inside the deleteClass endpoint ${id}`)
    return this.http.delete<Class>(`${this.classUrl}/${id}`);
  }

  public createClass(details : Classdetail) :Observable<Classdetail>
  {
    return this.http.post(this.classUrl,details);
  }

  public editClass(id:number,classInfo : Classdetail)
  {
    return this.http.put(`${this.classUrl}/${id}`,classInfo);
  }

  public enrollStudent(data : ClassEnrollStudent) :Observable<ClassEnrollStudent>
  {
    return this.http.patch<ClassEnrollStudent>(`${this.classUrl}/update`,data)
  }

}
