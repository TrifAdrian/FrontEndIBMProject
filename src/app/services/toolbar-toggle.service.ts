import { Injectable } from '@angular/core';
import { UserRoleInputComponent } from '../components/user-role-input/user-role-input.component';

@Injectable({
  providedIn: 'root'
})
export class ToolbarToggleService {

  public activeWindow : string = "";

  constructor() {
   }

  toggleWindow(name : string)
  {
    if(this.activeWindow == name)
      this.activeWindow = "";
    else
      this.activeWindow = name;
  }
}
