import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RadioDisclaimerOptionModel } from '../../models/radio-disclaimer-option.model';

@Component({
  selector: 'md-radio-disclaimer-button',
  templateUrl: './radio-disclaimer-button.component.html'
})
export class RadioDisclaimerButtonComponent implements OnChanges, OnInit {

  @Input() options: Array<RadioDisclaimerOptionModel> = [];
  @Input() title: string = '';

  public hasOptions = false;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.options) {
      this.hasOptions = !!((this.options) && (this.options.length));
    }
  }

  public handleSelection(value: string): void {
    if (this.isValueWithinOptions(value)) {
      const length: number = this.options ? this.options.length : 0;
      for (let idx: number = 0; idx < length; idx++) {
        const option: RadioDisclaimerOptionModel = this.options[idx];
        if (option) {
          option.selected = value === option.value;
        }
      }
    }
  }

  private isValueWithinOptions(value: string): boolean {
    return this.options && this.options.some((option: RadioDisclaimerOptionModel): boolean => {
      return option && option.value === value;
    });
  }
}
