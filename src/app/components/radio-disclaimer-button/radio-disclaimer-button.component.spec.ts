import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';

import { RadioDisclaimerButtonComponent } from './radio-disclaimer-button.component';
import { RadioDisclaimerOptionComponent } from '../radio-disclaimer-option/radio-disclaimer-option.component';
import { RadioDisclaimerOptionModel } from '../../models/radio-disclaimer-option.model';

@Component({ template: `
<div *ngIf="showComponent">
  <md-radio-disclaimer-button [options]="options" [title]="title">
  </md-radio-disclaimer-button>
</div>` })
class TestWrapperComponent {
  public options: Array<RadioDisclaimerOptionModel> = [];
  public showComponent: boolean = false;
  public title: string = '';
}

describe('RadioDisclaimerButtonComponent', (): void => {
  let component: TestWrapperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;
  const testConfig: TestModuleMetadata = {
    declarations: [
      RadioDisclaimerButtonComponent,
      RadioDisclaimerOptionComponent,
      TestWrapperComponent
    ]
  };

  beforeEach(async((): void => {
    TestBed.configureTestingModule(testConfig).compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    component.showComponent = true;
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement.querySelector('md-radio-disclaimer-button');
    expect(element).toBeTruthy();
  });

  it('three options in input, select second option, second option selected true', (): void => {
    const options: Array<RadioDisclaimerOptionModel> = [
      new RadioDisclaimerOptionModel('value-one', 'display-one', 'parent-name', true),
      new RadioDisclaimerOptionModel('value-two', 'display-two', 'parent-name', false),
      new RadioDisclaimerOptionModel('value-three', 'display-three', 'parent-name', false)
    ];
    component.options = options;
    component.showComponent = true;
    fixture.detectChanges();

    const optionElements: Array<HTMLOptionElement> = fixture.nativeElement.querySelectorAll('input[type="radio"]');
    optionElements[1].click();
    fixture.detectChanges();

    expect(options[1].selected).toBeTrue();
  });
});
