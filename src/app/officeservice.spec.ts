import { TestBed } from '@angular/core/testing';

import { OfficeService } from './office.service';

describe('OfficeServiceService', () => {
  let service: OfficeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfficeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
