import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDeviceSettingsComponent } from './sub-device-settings.component';

describe('SubDeviceSettingsComponent', () => {
  let component: SubDeviceSettingsComponent;
  let fixture: ComponentFixture<SubDeviceSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubDeviceSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubDeviceSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
