/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OpenHabService } from './open-hab.service';

describe('OpenHabService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenHabService]
    });
  });

  it('should ...', inject([OpenHabService], (service: OpenHabService) => {
    expect(service).toBeTruthy();
  }));
});
