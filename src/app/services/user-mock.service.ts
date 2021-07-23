import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserMockService {

  constructor() { }

  getArrayRoles():Observable<string[]>
  {
    return of(["Student","Teacher","Admin"]);
  }

}

