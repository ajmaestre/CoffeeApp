import { TestBed } from '@angular/core/testing';

import { ComprensionDataPageService } from './comprension-data-page.service';

describe('ComprensionDataPageService', () => {
  let service: ComprensionDataPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComprensionDataPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
