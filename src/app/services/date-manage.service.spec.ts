import { TestBed } from '@angular/core/testing';

import { DateManageService } from './date-manage.service';

describe('DateManageService', () => {
  let service: DateManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
