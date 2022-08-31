import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAlertComponent } from './sub-alert.component';

describe('SubAlertComponent', () => {
  let component: SubAlertComponent;
  let fixture: ComponentFixture<SubAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
