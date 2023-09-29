import { TestBed } from '@angular/core/testing';

import { StoreResponseService } from './store-response.service';

describe('StoreResponseService', () => {
  let service: StoreResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
