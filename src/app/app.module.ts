import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRoleInputComponent } from './components/user-role-input/user-role-input.component';
import { FormsModule } from '@angular/forms';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ClassDetailsComponent } from './components/class-details/class-details.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ClassCreationComponent } from './components/class-creation/class-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRoleInputComponent,
    ScheduleComponent,
    ClassDetailsComponent,
    ToolbarComponent,
    ClassCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
