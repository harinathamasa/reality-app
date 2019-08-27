import { TestBed } from '@angular/core/testing';

import { PetInsuranceService } from './pet-insurance.service';

describe('PetInsuranceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetInsuranceService = TestBed.get(PetInsuranceService);
    expect(service).toBeTruthy();
  });
});
