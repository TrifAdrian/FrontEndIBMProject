import { Component, OnInit } from '@angular/core';

import { UserManageService } from '../../services/user-manage.service';
import { ToolbarToggleService } from '../../services/toolbar-toggle.service';
import {User} from "../../objects/user/user";
import {UserService} from "../../services/user/user.service";
import {stringify} from "@angular/compiler/src/util";

@Component({
  selector: 'app-user-role-input',
  templateUrl: './user-role-input.component.html',
  styleUrls: ['./user-role-input.component.css','../toolbar/toolbar.component.css']
})
export class UserRoleInputComponent implements OnInit {

  constructor(private userService:UserService) {
    this.userService.getAllUsers().subscribe(x => this.users =x);
  }

  users ?: User[];
  inputUser !: number;
  currentUser !:User;

  ngOnInit(): void {
  }

  reloadSavedValues() : void
  {
    // this.inputFirst = this.user.firstName;
    // this.inputLast  = this.user.lastName;
    // this.inputRole  = this.user.role;
  }

  getMockRoles(): void {
    // this.mock.getArrayRoles()
    // .subscribe(roles => this.roles = roles);
  }

  onSubmit(): void
  {
    this.users = this.users?.filter(x => x.id == this.inputUser)
    this.currentUser=this.users?.pop()!;

    localStorage.setItem("loggedUser",JSON.stringify(this.currentUser));
    console.log(JSON.parse(localStorage.getItem("loggedUser")!))

    //localStorage.setItem("role",stringify(this.currentUser.role));

    window.location.reload();
  }
}
