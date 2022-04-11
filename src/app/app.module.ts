import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreComponent } from './sobre/sobre.component';
import { InicioComponent } from './inicio/inicio.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { PostagemComponent } from './postagem/postagem.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    SobreComponent,
    InicioComponent,
    CadastroComponent,
    MenuComponent,
    LoginComponent,
    PostagemComponent,
    MeuPerfilComponent
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
