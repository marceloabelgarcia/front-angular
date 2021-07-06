/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SwapiService } from './swapi.service';

describe('Service: Swapi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwapiService],
    });
  });

  it('should ...', inject([SwapiService], (service: SwapiService) => {
    expect(service).toBeTruthy();
  }));
});
