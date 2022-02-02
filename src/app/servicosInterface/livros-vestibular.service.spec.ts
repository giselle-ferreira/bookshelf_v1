/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LivrosVestibularService } from './livros-vestibular.service';

describe('Service: LivrosVestibular', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LivrosVestibularService]
    });
  });

  it('should ...', inject([LivrosVestibularService], (service: LivrosVestibularService) => {
    expect(service).toBeTruthy();
  }));
});
