import {Component, OnInit} from '@angular/core';
import {ToolbarToggleService} from '../../services/toolbar-toggle.service';
import {Role} from "../../objects/role";
import {User} from "../../objects/user/user";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  userRole : string | null = 'Student';
  currentUser !: User
  whatToDisplay : string = "";
  firstTime : boolean = true;


  constructor(private toggleService: ToolbarToggleService) {

    //this.currentUser = new User();

  }

  ngOnInit(): void {

    this.getLocalUser();

    this.whatToDisplay = this.toggleService.activeWindow;
  }

  private getLocalUser()
  {
    this.currentUser = JSON.parse(localStorage.getItem("loggedUser")!)

    if(!this.currentUser)
    {
      this.currentUser= new User();
      this.currentUser.role=Role.GUEST;
    }

    switch (this.currentUser.role.toString()) {
      case "TEACHER":
        this.userRole = "Teacher";
        break;
      case "STUDENT":
        this.userRole = "Student";
        break;
      case "GUEST":
        this.userRole = "Guest";
        break;
      case "ADMIN":
        this.userRole = "Admin";
        break;
    }
  }



  toggle(name : string)
  {
    this.toggleService.toggleWindow(name);
    this.ngOnInit();
  }
}
