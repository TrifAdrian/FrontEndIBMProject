import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { UserMockService } from 'src/app/services/user-mock.service';
import { ToolbarToggleService } from '../../services/toolbar-toggle.service';
=======
>>>>>>> 123abfa13d24fc4172096646fce46cd17736cb7c

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

<<<<<<< HEAD
  constructor(private toggleService: ToolbarToggleService, private mockUser : UserMockService) { }

  ngOnInit(): void {
    this.userRole = this.mockUser.getUserRole();
  }

  displayRole : boolean = false;
  displayCreate : boolean = false;
  displayInfo : boolean = false;
  userRole : string|null = null ;

  toggleWindow(index : number)
  {
    this.toggleService.toggleElement(index);
    this.updateValuesRefresh()
  }

  updateValuesRefresh()
  {
    this.displayRole = this.toggleService.getElement(0);
    this.displayCreate = this.toggleService.getElement(1);
    this.displayInfo = this.toggleService.getElement(2);
    this.ngOnInit();
=======
  constructor() { }

  ngOnInit(): void {
>>>>>>> 123abfa13d24fc4172096646fce46cd17736cb7c
  }

}
