import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserManageService {

  @Input() name?: string;

  constructor() { }
}
