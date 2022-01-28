import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { AppDialogosComponent } from './../app-compartilhado/app-dialogos/app-dialogos.component';
import { MatDialog } from '@angular/material/dialog';
import { EmpreendedorismoService } from './../servicosInterface/empreendedorismo.service';
import { Observable, catchError, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Empreendedorismo } from '../modelosInterface/empreendedorismo';

@Component({
  selector: 'app-empreendedorismo',
  templateUrl: './empreendedorismo.component.html',
  styleUrls: ['./empreendedorismo.component.scss']
})
export class EmpreendedorismoComponent implements OnInit {

  livrosEmpreend$: Observable<Empreendedorismo[]>
  livrosColunas=['ranking','img', 'titulo','autor','descricao', 'ano'];

  usuario$ = this.AutenticacaoFirebaseService.usuarioLogado$;
  livrosEmpreend = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if(matches){
        return this.livrosEmpreend$;
      }
      return this.livrosEmpreend$;
    })
  )

  constructor(
    private breakpointObserver: BreakpointObserver,
    private AutenticacaoFirebaseService: AutenticacaoFirebaseService,
    private empreendServ: EmpreendedorismoService,
    public dialogo: MatDialog) {

    this.livrosEmpreend$ = empreendServ.listaLivrosEmpreend().pipe(
      catchError(error => {
        this.abrirDialogoErro('Erro ao carregar a tabela: #BS - '+ error.status)
        return of([])
      }
      )
    )
  }

  abrirDialogoErro(erroMsg: string){
    this.dialogo.open(AppDialogosComponent, {
      data: erroMsg
    })
  }

  ngOnInit(): void {
  }

}
