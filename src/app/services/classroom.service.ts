import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Classroom} from "../objects/classroom/classroom";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  classroomUrl!: string;

  constructor(private http:HttpClient) {
    this.classroomUrl=`${environment.baseUrl}/classroom`;
  }

  public getClassrooms() : Observable<Classroom[]>
  {
    return this.http.get<Classroom[]>(this.classroomUrl);
  }

  public getClassroomById(id : number) : Observable<Classroom>
  {
    return this.http.get<Classroom>(`${this.classroomUrl}/${id}`);
  }

  public deleteClassroomById(id : number)
  {
    return this.http.delete(`${this.classroomUrl}/${id}`)
  }

  public updateClassroom(classroom : Classroom) : Observable<Classroom>
  {
    return this.http.put<Classroom>(`${this.classroomUrl}`,classroom)
  }

  public addClassroom(classroom : Classroom) : Observable<Classroom>
  {
    return this.http.post<Classroom>(`${this.classroomUrl}`,classroom);
  }
}
