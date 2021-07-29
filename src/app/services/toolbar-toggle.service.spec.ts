import { TestBed } from '@angular/core/testing';

import { ToolbarToggleService } from './toolbar-toggle.service';

describe('ToolbarToggleService', () => {
  let service: ToolbarToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolbarToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
