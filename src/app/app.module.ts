import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RadioDisclaimerButtonsComponent } from './components/radio-disclaimer-buttons/radio-disclaimer-buttons.component';
import { RadioDisclaimerOptionComponent } from './components/radio-disclaimer-option/radio-disclaimer-option.component';

@NgModule({
  declarations: [
    AppComponent,
    RadioDisclaimerButtonsComponent,
    RadioDisclaimerOptionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
