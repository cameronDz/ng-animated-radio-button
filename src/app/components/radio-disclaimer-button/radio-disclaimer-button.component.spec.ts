import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';

import { ButtonOptionsService } from '../../services/button-options.service';
import { RadioDisclaimerButtonComponent } from './radio-disclaimer-button.component';
import { RadioDisclaimerOptionComponent } from '../radio-disclaimer-option/radio-disclaimer-option.component';

@Component({ template: `
<div *ngIf="showComponent">
  <md-radio-disclaimer-button [options]="options" [title]="title">
  </md-radio-disclaimer-button>
</div>` })
class TestWrapperComponent {
  public showComponent: boolean = false;
}

describe('RadioDisclaimerButtonComponent', () => {
  let component: TestWrapperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;
  const testConfig: TestModuleMetadata = {
    declarations: [
      RadioDisclaimerButtonComponent,
      RadioDisclaimerOptionComponent,
      TestWrapperComponent
    ],
    providers: [
      ButtonOptionsService
    ]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule(testConfig).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.showComponent = true;
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement.querySelector('md-radio-disclaimer-button');
    expect(element).toBeTruthy();
  });
});
