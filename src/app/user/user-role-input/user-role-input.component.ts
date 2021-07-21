import { Component, OnInit } from '@angular/core';
import { UserMockService,User } from '../user-mock.service';
import { UserManageService } from '../user-manage.service';

@Component({
  selector: 'app-user-role-input',
  templateUrl: './user-role-input.component.html',
  styleUrls: ['./user-role-input.component.css']
})
export class UserRoleInputComponent implements OnInit {

  roles : String[] = [];

  inputName : string = "";
  inputRole : string = "";
  

  constructor(private mock : UserMockService) { }

  ngOnInit(): void {
    this.getMockRoles();
  }

  getMockRoles(): void {
    this.mock.getArrayRoles()
    .subscribe(roles => this.roles = roles);
  }

  onSubmit(): void
  {
      
  }

  
  

}
