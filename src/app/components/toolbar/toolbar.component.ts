import { Component, OnInit } from '@angular/core';
import { UserMockService } from 'src/app/services/user-mock.service';
import { ToolbarToggleService } from '../../services/toolbar-toggle.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
	
  constructor(private toggleService: ToolbarToggleService, private mockUser : UserMockService) { }

  ngOnInit(): void {
    this.userRole = this.mockUser.getUserRole();
    this.whatToDisplay = this.toggleService.activeWindow;
  }

  userRole : string|null = null ;

  whatToDisplay : string = "";

  toggle(name : string)
  {
    this.toggleService.toggleWindow(name);
    this.ngOnInit();
  }
}
