import { TestBed } from '@angular/core/testing';

import { RecoverResponseService } from './recover-response.service';

describe('RecoverResponseService', () => {
  let service: RecoverResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecoverResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
