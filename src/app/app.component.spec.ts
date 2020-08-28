import { async, ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ButtonOptionsService } from './services/button-options.service';
import { RadioDisclaimerButtonComponent } from './components/radio-disclaimer-button/radio-disclaimer-button.component';
import { RadioDisclaimerOptionComponent } from './components/radio-disclaimer-option/radio-disclaimer-option.component';

describe('AppComponent', (): void => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
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

  beforeEach(async((): void => {
    TestBed.configureTestingModule(testConfig).compileComponents();
  }));

  it('should create the app', (): void => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'md-radio-button-disclaimers'`, (): void => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;

    expect(app.title).toEqual('md-radio-button-disclaimers');
  });

  it('should render title', (): void => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();

    const element: string = fixture.nativeElement.querySelector('.content span').textContent;
    const expectedConatining: string = 'md-radio-button-disclaimers';
    expect(element).toContain(expectedConatining);
  });
});
