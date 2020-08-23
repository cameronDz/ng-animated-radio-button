import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioDisclaimerButtonsComponent } from './radio-disclaimer-buttons.component';

describe('RadioDisclaimerButtonsComponent', () => {
  let component: RadioDisclaimerButtonsComponent;
  let fixture: ComponentFixture<RadioDisclaimerButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioDisclaimerButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioDisclaimerButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
