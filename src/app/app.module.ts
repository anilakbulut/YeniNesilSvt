import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { SubDashboardComponent } from './sub-dashboard/sub-dashboard.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { SubPinSettingsComponent } from './sub-pin-settings/sub-pin-settings.component';
import { SubDeviceSettingsComponent } from './sub-device-settings/sub-device-settings.component';
import { SubAlertComponent } from './sub-alert/sub-alert.component';
import { SubUserSettingsComponent } from './sub-user-settings/sub-user-settings.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/kit';
import { ProfileComponent } from './profile/profile.component';
import {TuiInputPasswordModule} from '@taiga-ui/kit';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiFilterByInputPipeModule} from '@taiga-ui/kit';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { CommonModule } from "@angular/common";
import { GridsterModule } from 'angular-gridster2';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    SettingsComponent,
    SubDashboardComponent,
    SubPinSettingsComponent,
    SubDeviceSettingsComponent,
    SubAlertComponent,
    SubUserSettingsComponent,
    ProfileComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
      TuiRootModule,
      TuiDialogModule,
      TuiAlertModule,
      ReactiveFormsModule,
      TuiButtonModule,
      TuiInputModule,
      TuiInputPasswordModule,
      TuiFilterByInputPipeModule,
      CommonModule,
      GridsterModule
],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
