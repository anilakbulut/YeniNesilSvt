import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPinSettingsComponent } from './sub-pin-settings.component';

describe('SubPinSettingsComponent', () => {
  let component: SubPinSettingsComponent;
  let fixture: ComponentFixture<SubPinSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubPinSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPinSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
