import { TestBed } from '@angular/core/testing';

import { ButtonOptionsService } from './button-options.service';

describe('ButtonOptionsService', () => {
  let service: ButtonOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
