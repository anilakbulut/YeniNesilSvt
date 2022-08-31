import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  @Input() collapsed = false;
  @Input() screenWidth = 0;
  @Input() deviceName:string ="";
  @Input() whichDevice:string ="";
  @Input() whichIcon:string ="";

  deviceTest = false;
  ngOnInit(){
    this.whichIcon="Profile"
  }
  ngOnChanges(changes: SimpleChange){
    this.testDevice()
  }
  testDevice(){
    console.log("Cihaz ismi: " +this.whichIcon)
    if(this.deviceName == 'Alarmlar' && this.whichIcon=='Dashboard'){
      this.deviceTest = true
    }
    else {
      this.deviceTest = false
    }
  }


}
