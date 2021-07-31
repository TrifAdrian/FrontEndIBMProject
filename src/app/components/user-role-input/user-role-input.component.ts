import { Component, OnInit } from '@angular/core';
import { UserMockService, User } from '../../services/user-mock.service';
import { UserManageService } from '../../services/user-manage.service';
import { ToolbarToggleService } from '../../services/toolbar-toggle.service';

@Component({
  selector: 'app-user-role-input',
  templateUrl: './user-role-input.component.html',
  styleUrls: ['./user-role-input.component.css','../toolbar/toolbar.component.css']
})
export class UserRoleInputComponent implements OnInit {

  constructor(private mock : UserMockService) { }

  roles : String[] = [];
  user : User = new User("","","");

  inputFirst : string|null = ""
  inputLast : string|null = ""
  inputRole : string|null = ""
  
  ngOnInit(): void {
    this.getMockRoles();
    this.user = this.mock.getSavedUser();
    this.reloadSavedValues();
  }

  reloadSavedValues() : void
  {
    this.inputFirst = this.user.firstName;
    this.inputLast  = this.user.lastName;
    this.inputRole  = this.user.role;
  }

  getMockRoles(): void {
    this.mock.getArrayRoles()
    .subscribe(roles => this.roles = roles);
  }

  onSubmit(): void
  {
    this.mock.saveToLocal(new User(this.inputFirst,this.inputLast,this.inputRole));
    window.location.reload();
  }
}
