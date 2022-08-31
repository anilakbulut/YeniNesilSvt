import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, Output, EventEmitter, OnInit, HostListener, ViewChild, ElementRef, Renderer2, ViewChildren } from '@angular/core';
import { deviceData } from '../dashboard/device';
import { profileData } from '../profile/profile';
import { navbarData } from './nav-data';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],

})
export class SidenavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  devData = deviceData;
  profData = profileData;

  
  labeltext:string=""
  testlabel:any;
  commonData:any;
  profileValue = ""

  status=false;
  deviceName:string="";
  @Output() sendNameOfDevice = new EventEmitter<string>();
  @Output() whichDevice = new EventEmitter<string>();
  @Output() whichIcon = new EventEmitter<string>();
  clickedIndex:any;
  text:string=""
  items:any = document.getElementsByClassName('fa fa-arrow-right') as HTMLCollectionOf<HTMLElement>

  ngOnInit(): void {
      this.screenWidth = window.innerWidth;
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  getLabelName(value:any){
    this.profileValue = value
    if(value == 'Dashboard'){
      this.commonData = this.devData;
    }
    if(value == 'Profile'){
      this.commonData = this.profData;
    }
  }
  
  constructor(private rendererDisplay: Renderer2,private rendererTransform: Renderer2) {
    this.clickedIndex = 0
   }

  @ViewChild('collapseIconDiv') collapseIconDiv!: ElementRef;

  collapseIcon(deviceName:string){
    this.whichDevice.emit(deviceName);
    this.deviceName = deviceName;
    if(this.status) {
      this.rendererDisplay.setStyle(this.collapseIconDiv.nativeElement,'display','none');
      this.status = false
    }
    else{
      this.rendererDisplay.setStyle(this.collapseIconDiv.nativeElement,'display','block');
      this.status= true
    }
  }

  onClickDevice(deviceName:string){
      this.sendNameOfDevice.emit(deviceName);
  }
  sendIconStr(iconName:string){
    this.whichIcon.emit(iconName);
  }
  
  getId(event:any) {
    console.log("tıklanan index: " +this.clickedIndex)
    for (let i = 0; i < this.items.length; i++) {
      let element = this.items[i];
      if(i == event && this.status){
        element.style.transform = "rotate(90deg)"
        for(let j=0; j< this.items.length ; j++){
          let otherElement = this.items[j];
          if( i!=j ){
            otherElement.style.transform = "rotate(0deg)"
          }
        }
      }
      else if( i == event && !this.status){
        element.style.transform = "rotate(0deg)"
      }
    }
  }



  

}
