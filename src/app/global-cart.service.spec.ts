import { TestBed } from '@angular/core/testing';

import { GlobalCartService } from './global-cart.service';

describe('GlobalCartService', () => {
  let service: GlobalCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
