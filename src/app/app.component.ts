import { Component, OnDestroy, OnInit } from '@angular/core';
import { ButtonOptionsService } from './services/button-options.service';
import { RadioDisclaimerOptionModel } from './models/radio-disclaimer-option.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'md-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public buttonTitle: string = 'Test Radio Buttons';
  public loading: boolean = false;
  public options: Array<RadioDisclaimerOptionModel> = [];
  public title: string = 'md-radio-button-disclaimers';

  private buttonOptionsSubscription: Subscription = null;

  constructor(private buttonOptionsService: ButtonOptionsService) {}

  ngOnInit(): void {
    this.getButtonOptionsData();
  }

  ngOnDestroy(): void {
    if (this.buttonOptionsSubscription) {
      this.buttonOptionsSubscription.unsubscribe();
    }
  }

  private getButtonOptionsData(): void {
    this.loading = true;
    this.buttonOptionsSubscription = this.buttonOptionsService.getButtonOptionsList().subscribe(
      (data: Array<RadioDisclaimerOptionModel>): void => this.buttonServiceSuccessCallback(this, data),
      (error: any): void => this.buttonServiceErrorCallback(this, error),
      (/* completed */): void => this.buttonServiceCompletedCallback(this));
  }

  private buttonServiceSuccessCallback(self: AppComponent, data: Array<RadioDisclaimerOptionModel>): void {
    if (data && data.length) {
      self.options = data;
    }
  }

  private buttonServiceErrorCallback(self: AppComponent, error: any): void {}

  private buttonServiceCompletedCallback(self: AppComponent): void {
    self.loading = false;
  }
}
