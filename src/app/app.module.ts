import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RadioDisclaimerOptionComponent } from './components/radio-disclaimer-option/radio-disclaimer-option.component';
import { RadioDisclaimerButtonComponent } from './components/radio-disclaimer-button/radio-disclaimer-button.component';

@NgModule({
  declarations: [
    AppComponent,
    RadioDisclaimerOptionComponent,
    RadioDisclaimerButtonComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
