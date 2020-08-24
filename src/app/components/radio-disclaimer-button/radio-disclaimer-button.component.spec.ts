import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioDisclaimerButtonComponent } from './radio-disclaimer-button.component';

xdescribe('RadioDisclaimerButtonComponent', () => {
  let component: RadioDisclaimerButtonComponent;
  let fixture: ComponentFixture<RadioDisclaimerButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioDisclaimerButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioDisclaimerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
