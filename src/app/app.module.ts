import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape.component';

import { InicioComponent } from './inicio/inicio.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { PostagemComponent } from './postagem/postagem.component';
<<<<<<< HEAD
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
=======
import { AboutComponent } from './about/about.component';
>>>>>>> 3dbad889b376a0f094ae341dd7a589f45d919c6a

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    AboutComponent,
    InicioComponent,
    CadastroComponent,
    MenuComponent,
    LoginComponent,
    PostagemComponent,
<<<<<<< HEAD
    MeuPerfilComponent
=======
    AboutComponent
>>>>>>> 3dbad889b376a0f094ae341dd7a589f45d919c6a
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
