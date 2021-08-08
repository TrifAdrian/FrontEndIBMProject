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
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ScheduleEntryComponent } from './components/schedule-entry/schedule-entry.component';
import { ToolbarToggleService } from './services/toolbar-toggle.service';
import { ClassInfoService } from './services/class-info.service';
import { DateManageService } from './services/date-manage.service';
import { FeatureComponent } from './components/feature/feature.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    UserRoleInputComponent,
    ScheduleComponent,
    ClassDetailsComponent,
    ToolbarComponent,
    ClassCreationComponent,
    ScheduleEntryComponent,
    FeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [DateManageService, ClassInfoService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
