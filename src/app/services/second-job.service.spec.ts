import { TestBed } from '@angular/core/testing';

import { SecondJobService } from './second-job.service';

describe('SecondJobService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecondJobService = TestBed.get(SecondJobService);
    expect(service).toBeTruthy();
  });
});
