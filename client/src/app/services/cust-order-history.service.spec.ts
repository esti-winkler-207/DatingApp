import { TestBed } from '@angular/core/testing';

import { CustOrderHistoryService } from './cust-order-history.service';

describe('CustOrderHistoryService', () => {
  let service: CustOrderHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustOrderHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
