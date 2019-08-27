import { TestBed } from '@angular/core/testing';

import { SurveycardService } from './surveycard.service';

describe('SurveycardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SurveycardService = TestBed.get(SurveycardService);
    expect(service).toBeTruthy();
  });
});
