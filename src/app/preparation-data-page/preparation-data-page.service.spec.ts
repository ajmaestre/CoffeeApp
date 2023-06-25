import { TestBed } from '@angular/core/testing';

import { PreparationDataPageService } from './preparation-data-page.service';

describe('PreparationDataPageService', () => {
  let service: PreparationDataPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreparationDataPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
