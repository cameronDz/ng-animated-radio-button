import { async, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ButtonOptionsService } from './services/button-options.service';
import { RadioDisclaimerButtonComponent } from './components/radio-disclaimer-button/radio-disclaimer-button.component';
import { RadioDisclaimerOptionComponent } from './components/radio-disclaimer-option/radio-disclaimer-option.component';

describe('AppComponent', () => {
  const testConfig: TestModuleMetadata = {
    declarations: [
      AppComponent,
      RadioDisclaimerButtonComponent,
      RadioDisclaimerOptionComponent
    ],
    imports: [
      BrowserAnimationsModule
    ],
    providers: [
      ButtonOptionsService
    ]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule(testConfig).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'md-radio-button-disclaimers'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('md-radio-button-disclaimers');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const expectedConatining = 'md-radio-button-disclaimers';
    expect(compiled.querySelector('.content span').textContent).toContain(expectedConatining);
  });
});
