import { first, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LivrosVestibular } from '../modelosInterface/livros-vestibular';

@Injectable({
  providedIn: 'root'
})
export class LivrosVestibularService {

  private readonly uriApiFGV = '../../assets/vestibLivrosFGV.json';
  private readonly uriApiFuvest = '../../assets/vestibLivrosFGV.json';
  private readonly uriApiITA = '../../assets/vestibLivrosFGV.json';
  private readonly uriApiPUC = '../../assets/vestibLivrosFGV.json';
  private readonly uriApiUERJ = '../../assets/vestibLivrosFGV.json';
  private readonly uriApiUnicamp = '../../assets/vestibLivrosFGV.json';


  constructor(private vestibHttp: HttpClient) { }

  livrosFGV() {
    return this.vestibHttp.get<LivrosVestibular[]>(this.uriApiFGV).pipe(
      first(),
      tap(apiFGV => apiFGV)
    )
  }

  livrosFuvest() {
    return this.vestibHttp.get<LivrosVestibular[]>(this.uriApiFuvest).pipe(
      first(),
      tap(apiFuvest => apiFuvest)
    )
  }

    livrosITA() {
    return this.vestibHttp.get<LivrosVestibular[]>(this.uriApiITA).pipe(
      first(),
      tap(apiITA => apiITA)
    )
  }

  livrosPUC() {
    return this.vestibHttp.get<LivrosVestibular[]>(this.uriApiPUC).pipe(
      first(),
      tap(apiPUC => apiPUC)
    )
  }

  livrosUERJ() {
    return this.vestibHttp.get<LivrosVestibular[]>(this.uriApiUERJ).pipe(
      first(),
      tap(apiUERJ => apiUERJ)
    )
  }

  livrosUnicamp() {
    return this.vestibHttp.get<LivrosVestibular[]>(this.uriApiUnicamp).pipe(
      first(),
      tap(apiUnicamp => apiUnicamp)
    )
  }













}
