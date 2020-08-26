import { animate, group, sequence, state, style, transition, trigger, AnimationTriggerMetadata } from '@angular/animations';
import { RadioButtonDisclaimerState } from '../../models/radio-button-disclaimer-state.enum';

export const RadioDisclaimerOptionAnimation: AnimationTriggerMetadata = trigger('buttonDisclaimerState', [
  state(RadioButtonDisclaimerState.COLLAPSED, style({
    display: 'none',
    height: '0',
    opacity: '0',
    padding: '0'
  })),
  state(RadioButtonDisclaimerState.EXPANDED, style({
    display: 'block',
    height: '*',
    opacity: '1',
    padding: '16px',
    paddingLeft: '32px'
  })),
  transition(`${RadioButtonDisclaimerState.COLLAPSED} => ${RadioButtonDisclaimerState.EXPANDED}`,
    sequence([
      animate('0ms steps(1,start)', style({ display: 'block' })),
      animate('250ms ease-out', style({
        height: '*',
        opacity: '1',
        padding: '16px',
        paddingLeft: '32px'
      }))
    ])),
  transition(`${RadioButtonDisclaimerState.EXPANDED} => ${RadioButtonDisclaimerState.COLLAPSED}`,
    group([
      animate('250ms ease-in', style({
        height: '0',
        opacity: '0',
        padding: '0'
      })),
      animate('250ms steps(1,end)', style({ display: 'none' }))
    ])),
]);
