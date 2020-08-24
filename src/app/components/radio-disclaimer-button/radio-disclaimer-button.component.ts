import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RadioDisclaimerOptionModel } from '../../models/radio-disclaimer-option.model';

@Component({
  selector: 'md-radio-disclaimer-button',
  templateUrl: './radio-disclaimer-button.component.html',
  styleUrls: ['./radio-disclaimer-button.component.scss']
})
export class RadioDisclaimerButtonComponent implements OnChanges, OnInit {

  @Input() options: Array<RadioDisclaimerOptionModel> = [];
  @Input() title = '';

  public hasOptions = false;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.options) {
      this.hasOptions = !!((this.options) && (this.options.length));
    }
  }
}
