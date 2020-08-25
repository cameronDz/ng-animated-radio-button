import { Component, Input, OnChanges, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { RadioDisclaimerOptionModel } from '../../models/radio-disclaimer-option.model';

@Component({
  selector: 'md-radio-disclaimer-option',
  templateUrl: './radio-disclaimer-option.component.html',
  styleUrls: ['./radio-disclaimer-option.component.scss']
})
export class RadioDisclaimerOptionComponent implements OnChanges, OnInit {

  @Input() option: RadioDisclaimerOptionModel = null;
  @Output() onSelection: EventEmitter<string> = new EventEmitter<string>();

  public isDisplayable = false;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.option) {
      this.isDisplayable = !!((this.option) && (this.option.display) && (this.option.parent) && (this.option.value));
    }
  }

  public handleOnClick(): void {
    console.log('handleOnClick', this.option.value);
    if (this.option && !this.option.selected && this.onSelection) {
      this.onSelection.emit(this.option.value);
    }
  }
}
