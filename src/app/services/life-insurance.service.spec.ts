import { TestBed } from '@angular/core/testing';

import { LifeInsuranceService } from './life-insurance.service';

describe('LifeInsuranceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LifeInsuranceService = TestBed.get(LifeInsuranceService);
    expect(service).toBeTruthy();
  });
});
