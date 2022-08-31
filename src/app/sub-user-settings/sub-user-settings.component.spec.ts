import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubUserSettingsComponent } from './sub-user-settings.component';

describe('SubUserSettingsComponent', () => {
  let component: SubUserSettingsComponent;
  let fixture: ComponentFixture<SubUserSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubUserSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubUserSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
