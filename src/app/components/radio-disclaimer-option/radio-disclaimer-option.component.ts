import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { RadioButtonDisclaimerState } from '../../models/radio-button-disclaimer-state.enum';
import { RadioDisclaimerOptionAnimation } from './radio-disclaimer-option.animation';

@Component({
  selector: 'md-radio-disclaimer-option',
  templateUrl: './radio-disclaimer-option.component.html',
  styleUrls: ['./radio-disclaimer-option.component.scss'],
  animations: [RadioDisclaimerOptionAnimation]
})
export class RadioDisclaimerOptionComponent implements OnChanges, OnInit {

  @Input() disabled: boolean = false;
  @Input() disclaimer: string = '';
  @Input() display: string = '';
  @Input() parent: string = '';
  @Input() selected: boolean = false;
  @Input() value: string = '';
  @Output() onSelection: EventEmitter<string> = new EventEmitter<string>();

  public isDisplayable: boolean = false;
  public radioButtonDisclaimerState: RadioButtonDisclaimerState = RadioButtonDisclaimerState.COLLAPSED;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    this.updateIsDisplayable();
    this.updateRadioButtonState();
  }

  public handleClick(): void {
    if (!this.selected && this.onSelection) {
      this.onSelection.emit(this.value);
    }
  }

  private updateIsDisplayable(): void {
    this.isDisplayable = !!((this.display) && (this.parent) && (this.value));
  }

  private updateRadioButtonState(): void {
    this.radioButtonDisclaimerState = (this.selected && this.disclaimer)
      ? RadioButtonDisclaimerState.EXPANDED
      : RadioButtonDisclaimerState.COLLAPSED;
  }
}
