import { Component } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'svtproject';
  
  isSideNavCollapsed = false;
  screenWidth = 0;

  deviceName:string=""
  whichDevice:string=""
  whichIcon:string =""

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
  
  getDeviceNameFromSidenav(newItem: string) {
    this.deviceName = newItem
  }

  getWhichDeviceFromSidenav(newItem: string) {
    this.whichDevice = newItem
  }
  getWhichIconFromSidenav(newItem: string) {
    this.whichIcon = newItem
  }

}
