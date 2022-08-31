import { Component, OnInit, ViewChild,ChangeDetectionStrategy, Inject } from '@angular/core';
import { AlertData } from './alert';
import {FormControl, FormGroup} from '@angular/forms';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';



@Component({
  selector: 'app-sub-alert',
  templateUrl: './sub-alert.component.html',
  styleUrls: ['./sub-alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubAlertComponent implements OnInit {
  alert = AlertData;
  testForm = new FormGroup({
    input1: new FormControl(),
    input2: new FormControl(),
    input3: new FormControl(),
    input4: new FormControl(),

  });
  ngOnInit(): void {
    
  }
  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(TuiDialogService) private readonly editService: TuiDialogService,
) {}

  showDialog(content: PolymorpheusContent<TuiDialogContext>,): void {
      this.dialogService
          .open(content)
          .subscribe();
  }

  editDialog(edit: PolymorpheusContent<TuiDialogContext>,): void {
    this.editService
        .open(edit)
        .subscribe();
}
  
  clickDetails = true;
  clickHistory = false;


  isClickedDetails(){
    if(this.clickDetails == false){
      this.clickDetails = true;
      this.clickHistory = false;
    } 
    else this.clickDetails = false;
  }

  isClickedHistory(){
    if(this.clickHistory == false) {
      this.clickHistory = true;
      this.clickDetails = false;
    }
    else this.clickHistory = false;
  }


  


}
