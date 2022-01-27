import { first, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Psicologia } from '../modelosInterface/psicologia';

@Injectable({
  providedIn: 'root'
})
export class PsicologiaService {
  
  private readonly uriApi = '../../assets/psicologia.json'


  constructor(private psicoHttp: HttpClient) { }

  listaLivrosPsico() {
    return this.psicoHttp.get<Psicologia[]>(this.uriApi)
    .pipe(
      first(),
      tap(apiPsico => console.log(apiPsico))
    )
  }
}
