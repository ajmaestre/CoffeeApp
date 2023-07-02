import { TestBed } from '@angular/core/testing';

import { ModelsPageService } from './models-page.service';

describe('ModelsPageService', () => {
  let service: ModelsPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelsPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
