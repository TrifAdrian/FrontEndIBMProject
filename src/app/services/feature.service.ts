import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

import {Observable} from "rxjs";
import {Feature} from "../objects/feature/feature";

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  private featureUrl: string

  constructor(private http : HttpClient)
  {
    this.featureUrl=`${environment.baseUrl}/feature`
  }

  public getClassroomFeaturesById(id : number) :Observable<Feature[]>
  {
    return this.http.get<Feature[]>(`${this.featureUrl}/${id}`);
  }

  public deleteFeatureFromClassroom(id : number,classId:number)
  {
    return this.http.delete(`${this.featureUrl}/${id}/${classId}`);
  }



}
