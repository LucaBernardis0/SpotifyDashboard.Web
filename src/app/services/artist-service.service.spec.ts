import { TestBed } from '@angular/core/testing';

import { ArtistServiceService } from './artist.service';

describe('ArtistServiceService', () => {
  let service: ArtistServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
