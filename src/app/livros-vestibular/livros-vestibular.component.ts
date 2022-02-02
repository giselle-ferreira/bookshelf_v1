import { MatDialog } from '@angular/material/dialog';
import { AppDialogosComponent } from './../app-compartilhado/app-dialogos/app-dialogos.component';
import { LivrosVestibularService } from './../servicosInterface/livros-vestibular.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map, catchError, of } from 'rxjs';
import { LivrosVestibular } from './../modelosInterface/livros-vestibular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livros-vestibular',
  templateUrl: './livros-vestibular.component.html',
  styleUrls: ['./livros-vestibular.component.scss']
})
export class LivrosVestibularComponent implements OnInit {

  livrosFGV$!: Observable<LivrosVestibular[]>
  livrosFuvest$!: Observable<LivrosVestibular[]>
  livrosITA$!: Observable<LivrosVestibular[]>
  livrosPUC$!: Observable<LivrosVestibular[]>
  livrosUERJ$!: Observable<LivrosVestibular[]>
  livrosUnicamp$!: Observable<LivrosVestibular[]>

  constructor(
    private livrosVestibService: LivrosVestibularService,
    private breakpointObserver: BreakpointObserver,
    public dialogo: MatDialog
  ) {

    this.livrosFGV$ = livrosVestibService.livrosFGV().pipe(
      catchError(error => {
        this.abrirDialogoErro('Erro ao carregar informações')
        return of([])
      })
    )

    this.livrosFuvest$ = livrosVestibService.livrosFuvest().pipe(
      catchError(error => {
        this.abrirDialogoErro('Erro ao carregar informações')
        return of([])
      })
    )

    this.livrosITA$ = livrosVestibService.livrosITA().pipe(
      catchError(error => {
        this.abrirDialogoErro('Erro ao carregar informações')
        return of([])
      })
    )

    this.livrosPUC$ = livrosVestibService.livrosPUC().pipe(
      catchError(error => {
        this.abrirDialogoErro('Erro ao carregar informações')
        return of([])
      })
    )

    this.livrosUERJ$ = livrosVestibService.livrosUERJ().pipe(
      catchError(error => {
        this.abrirDialogoErro('Erro ao carregar informações')
        return of([])
      })
    )

    this.livrosUnicamp$ = livrosVestibService.livrosUnicamp().pipe(
      catchError(error => {
        this.abrirDialogoErro('Erro ao carregar informações')
        return of([])
      })
    )

  }

    abrirDialogoErro(erroMsg: string){
      this.dialogo.open(AppDialogosComponent, {
        data: erroMsg
      })
    }

    ngOnInit() {
    }

}


