import { TestBed } from '@angular/core/testing';

import { ClassMockService } from './class-mock.service';

describe('ClassMockService', () => {
  let service: ClassMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
