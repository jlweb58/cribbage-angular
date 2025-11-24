import { TestBed } from '@angular/core/testing';

import { HandService } from './hand.service';

describe('CardService', () => {
  let service: HandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
