import { ArtesComponent } from './artes/artes.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotToastModule } from '@ngneat/hot-toast';

import { environment } from '../environments/environment';
import { AppMaterialModule } from './app-compartilhado/app-material/app-material.module';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { AppCadastroComponent } from './app-cadastro/app-cadastro.component';
import { EmpreendedorismoComponent } from './empreendedorismo/empreendedorismo.component';
import { PsicologiaComponent } from './psicologia/psicologia.component';
import { DireitoComponent } from './direito/direito.component';
import { SagasComponent } from './sagas/sagas.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { TeatroComponent } from './teatro/teatro.component';
import { AppRecuperarSenhaComponent } from './app-recuperar-senha/app-recuperar-senha.component';
import { EspecialMesComponent } from './especial-mes/especial-mes.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppCompartilhadoModule } from './app-compartilhado/app-compartilhado.module';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SugestoesComponent } from './sugestoes/sugestoes.component';
import { IsbnComponent } from './isbn/isbn.component';
import { AppPaginaUsuarioComponent } from './app-pagina-usuario/app-pagina-usuario.component';
import { BrasilEMundoComponent } from './brasil-emundo/brasil-emundo.component';
import { WikiComponent } from './wiki/wiki.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { LivrosVestibularComponent } from './livros-vestibular/livros-vestibular.component';


@NgModule({
  declarations: [	
    AppComponent,
    NavegacaoComponent,
    FeedComponent,
    AppLoginComponent,
    AppCadastroComponent,
    EmpreendedorismoComponent,
    PsicologiaComponent,
    DireitoComponent,
    ArtesComponent,
    SagasComponent,
    TecnologiaComponent,
    TeatroComponent,
    AppRecuperarSenhaComponent,
    EspecialMesComponent,
    NotFoundComponent,
    SugestoesComponent,
    IsbnComponent,
    AppPaginaUsuarioComponent,
    BrasilEMundoComponent,
    WikiComponent,
      LivrosVestibularComponent
   ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppMaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    HotToastModule.forRoot(),
    AppCompartilhadoModule,
    MatTooltipModule,
    MatExpansionModule
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
