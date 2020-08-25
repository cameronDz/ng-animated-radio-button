import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { RadioButtonDisclaimerState } from 'src/app/models/radio-button-disclaimer-state.enum';

@Component({
  selector: 'md-radio-disclaimer-option',
  templateUrl: './radio-disclaimer-option.component.html',
  styleUrls: ['./radio-disclaimer-option.component.scss'],
  animations: [
    trigger('buttonDisclaimerState', [
      state(RadioButtonDisclaimerState.COLLAPSED, style({ height: '0', opacity: '0', display: 'none' })),
      state(RadioButtonDisclaimerState.EXPANDED, style({ height: '*', opacity: '1', marginBottom: '16px', display: 'block' })),
      transition(`${RadioButtonDisclaimerState.COLLAPSED} => ${RadioButtonDisclaimerState.EXPANDED}`, animate('250ms ease-out')),
      transition(`${RadioButtonDisclaimerState.EXPANDED} => ${RadioButtonDisclaimerState.COLLAPSED}`, animate('250ms ease-in'))
    ])
  ]
})
export class RadioDisclaimerOptionComponent implements OnChanges, OnInit {

  @Input() disabled: boolean = false;
  @Input() disclaimer: string = '';
  @Input() display: string = '';
  @Input() parent: string = '';
  @Input() selected: boolean = false;
  @Input() value: string = '';
  @Output() onSelection: EventEmitter<string> = new EventEmitter<string>();

  public isDisplayable = false;
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
