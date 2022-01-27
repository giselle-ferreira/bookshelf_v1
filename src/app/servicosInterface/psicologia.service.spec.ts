/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PsicologiaService } from './psicologia.service';

describe('Service: Psicologia', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PsicologiaService]
    });
  });

  it('should ...', inject([PsicologiaService], (service: PsicologiaService) => {
    expect(service).toBeTruthy();
  }));
});
