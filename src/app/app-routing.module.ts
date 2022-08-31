import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { SubAlertComponent } from './sub-alert/sub-alert.component';
import { SubDashboardComponent } from './sub-dashboard/sub-dashboard.component';
import { SubDeviceSettingsComponent } from './sub-device-settings/sub-device-settings.component';
import { SubPinSettingsComponent } from './sub-pin-settings/sub-pin-settings.component';
import { SubUserSettingsComponent } from './sub-user-settings/sub-user-settings.component';


const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: 'dashboard', 
    component: DashboardComponent,
    children:[
      {path: 'sub-dashboard', component:SubDashboardComponent},
      {path: 'sub-pin-settings', component:SubPinSettingsComponent},
      {path: 'sub-device-settings', component:SubDeviceSettingsComponent},
      {path: 'sub-alert', component:SubAlertComponent},
      {path: 'sub-user-settings', component:SubUserSettingsComponent},
    ]
  },
  {path: 'profile',component:ProfileComponent},
  {path: 'settings', component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
