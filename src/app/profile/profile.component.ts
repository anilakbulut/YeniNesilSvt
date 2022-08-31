import { Component, OnInit } from '@angular/core';
import { TuiDialogContext } from '@taiga-ui/core';
import {  ViewChild,ChangeDetectionStrategy, Inject } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { TuiDialogService } from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {
  testForm = new FormGroup({
    input1: new FormControl(),
    input2: new FormControl(),
    input3: new FormControl(),
    input4: new FormControl(),

  });
  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
  ) 
  { }

  ngOnInit(): void {
  }
  editPassword(content: PolymorpheusContent<TuiDialogContext>,): void {
    this.dialogService
        .open(content)
        .subscribe();
}
}
