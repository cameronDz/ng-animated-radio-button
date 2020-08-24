import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RadioDisclaimerOptionModel } from '../../models/radio-disclaimer-option.model';

@Component({
  selector: 'md-radio-disclaimer-option',
  templateUrl: './radio-disclaimer-option.component.html',
  styleUrls: ['./radio-disclaimer-option.component.scss']
})
export class RadioDisclaimerOptionComponent implements OnChanges, OnInit {

  @Input() option: RadioDisclaimerOptionModel = null;

  public isDisplayable = false;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.options) {
      this.isDisplayable = !!((this.option) && (this.option.display) && (this.option.parent) && (this.option.value));
    }
  }
}
