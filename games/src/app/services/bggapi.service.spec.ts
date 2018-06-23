import { TestBed, inject } from '@angular/core/testing';

import { BGGApiService } from './bggapi.service';

describe('BGGApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BGGApiService]
    });
  });

  it('should be created', inject([BGGApiService], (service: BGGApiService) => {
    expect(service).toBeTruthy();
  }));
});
