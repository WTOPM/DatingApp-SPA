

import { TestBed, async, inject } from '@angular/core/testing';
import { AlertifyService } from './alertify.service';

describe('Service: Alertyfy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertifyService]
    });
  });

  it('should ...', inject([AlertifyService], (service: AlertifyService) => {
    expect(service).toBeTruthy();
  }));
});
