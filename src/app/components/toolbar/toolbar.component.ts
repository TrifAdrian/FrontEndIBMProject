import { Component, OnInit } from '@angular/core';
import { UserMockService } from 'src/app/services/user-mock.service';
import { ToolbarToggleService } from '../../services/toolbar-toggle.service';
import {Role} from "../../objects/role";
import {User} from "../../objects/user/user";
import {stringify} from "@angular/compiler/src/util";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  userRole : string | null = null;
  currentUser !: User
  whatToDisplay : string = "";
  roles : string[] = ["Guest","Student","Teacher","Admin"];

  constructor(private toggleService: ToolbarToggleService, private mockUser : UserMockService) {

  }

  ngOnInit(): void {

    this.currentUser=JSON.parse(localStorage.getItem("loggedUser")!)



    this.whatToDisplay = this.toggleService.activeWindow;
  }



  toggle(name : string)
  {
    this.toggleService.toggleWindow(name);
    this.ngOnInit();
  }
}
