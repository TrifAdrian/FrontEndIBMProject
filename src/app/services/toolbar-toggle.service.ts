import { Injectable } from '@angular/core';
import { UserRoleInputComponent } from '../components/user-role-input/user-role-input.component';

@Injectable({
  providedIn: 'root'
})
export class ToolbarToggleService {

  private numberWindows : number = 3
  private windowsToggle: boolean[] = [];

  constructor() {
    
    for(let i = 0 ;i < this.numberWindows;i++)
      this.windowsToggle.push(false);
   }

  toggleElement(index:number)
  {
    for(let i : number = 0; i< this.windowsToggle.length; i++)
    {
      if(i!=index)
        this.windowsToggle[i] = false;
    }
    if(this.validIndex(index))
      this.windowsToggle[index] = !this.windowsToggle[index];
  }

  getElement(index : number)
  {
    if(this.validIndex(index))
      return this.windowsToggle[index];
    return false;
  }

  validIndex(index :number)
  {
    return index>=0 && index<this.windowsToggle.length;
  }
}
