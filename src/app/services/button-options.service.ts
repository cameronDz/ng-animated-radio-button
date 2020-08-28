import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { RadioDisclaimerOptionModel } from '../models/radio-disclaimer-option.model';
import * as _data from '../../assets/optionsPayloads.json';

@Injectable({ providedIn: 'root' })
export class ButtonOptionsService {

  constructor() {}

  public getButtonOptionsList(): Observable<Array<RadioDisclaimerOptionModel>> {
    return new BehaviorSubject<Array<RadioDisclaimerOptionModel>>(_data.payloads.basicData);
  }
}
