import { LivrosVestibularComponent } from './livros-vestibular/livros-vestibular.component';
import { AppPaginaUsuarioComponent } from './app-pagina-usuario/app-pagina-usuario.component';
import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';

import { AppCadastroComponent } from './app-cadastro/app-cadastro.component';
import { AppRecuperarSenhaComponent } from './app-recuperar-senha/app-recuperar-senha.component';
import { ArtesComponent } from './artes/artes.component';
import { DireitoComponent } from './direito/direito.component';
import { EmpreendedorismoComponent } from './empreendedorismo/empreendedorismo.component';
import { EspecialMesComponent } from './especial-mes/especial-mes.component';
import { FeedComponent } from './feed/feed.component';
import { IsbnComponent } from './isbn/isbn.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PsicologiaComponent } from './psicologia/psicologia.component';
import { SagasComponent } from './sagas/sagas.component';
import { SugestoesComponent } from './sugestoes/sugestoes.component';
import { TeatroComponent } from './teatro/teatro.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { BrasilEMundoComponent } from './brasil-emundo/brasil-emundo.component';
import { WikiComponent } from './wiki/wiki.component';

const enviarSemLogin = () => redirectUnauthorizedTo(['/app-app-cadastro']);

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'app-app-cadastro'
  },
  {
    path:'app-app-cadastro', component: AppCadastroComponent
  },
  {
    path: 'feed', component: FeedComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'cdd',
    loadChildren: () => import('./cdd/cdd.module').then(c => c.CddModule),
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'artes', component: ArtesComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'empreendedorismo', component: EmpreendedorismoComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'psicologia', component: PsicologiaComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'direito', component: DireitoComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'sagas', component: SagasComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'tecnologia', component: TecnologiaComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'teatro', component: TeatroComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'recuperarsenha', component: AppRecuperarSenhaComponent
  },
  {
    path:'EspecialMes', component: EspecialMesComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path:'sugestoes', component: SugestoesComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'isbn', component: IsbnComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path:'clube', component: AppPaginaUsuarioComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path:'brasil-emundo', component:BrasilEMundoComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'biblioteconomia',
    loadChildren: () => import('./biblioteconomia/biblioteconomia.module').then(c => c.BiblioteconomiaModule),
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'wiki', component: WikiComponent,
  },
  {
    path: 'vestibular', component: LivrosVestibularComponent,
  },
  {
    path: '**', component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
