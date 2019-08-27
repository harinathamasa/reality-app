import { TestBed } from '@angular/core/testing';

import { PublicTransportationService } from './public-transportation.service';

describe('PublicTransportationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PublicTransportationService = TestBed.get(PublicTransportationService);
    expect(service).toBeTruthy();
  });
});
