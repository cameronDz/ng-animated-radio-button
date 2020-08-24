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

  public buttonTitle = 'Test Radio Buttons';
  public loading = false;
  public options: Array<RadioDisclaimerOptionModel> = [];

  public title = 'md-radio-button-disclaimers';
  public titleDeclaration = 'app is running!';

  private buttonOptionsSubscription: Subscription = null;

  constructor(private buttonOptionsService: ButtonOptionsService) {}

  ngOnInit(): void {
    this.loading = true;
    this.buttonOptionsService.getButtonOptionsList().subscribe(
      (data: Array<RadioDisclaimerOptionModel>): void => {
        if (data && data.length) {
          this.options = data;
        }
      },
      (error: any): void => {},
      (/* completed */): void => {
        this.loading = false;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.buttonOptionsSubscription) {
      this.buttonOptionsSubscription.unsubscribe();
    }
  }
}
