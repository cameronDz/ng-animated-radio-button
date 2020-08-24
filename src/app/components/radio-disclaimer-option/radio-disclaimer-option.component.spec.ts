import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioDisclaimerOptionComponent } from './radio-disclaimer-option.component';

xdescribe('RadioDisclaimerOptionComponent', () => {
  let component: RadioDisclaimerOptionComponent;
  let fixture: ComponentFixture<RadioDisclaimerOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioDisclaimerOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioDisclaimerOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
