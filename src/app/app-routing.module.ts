import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
import { SobreComponent } from './sobre/sobre.component';
=======

>>>>>>> 3dbad889b376a0f094ae341dd7a589f45d919c6a

const routes: Routes = [
  {path: "", redirectTo: "about", pathMatch: "full"},
  {path: "about", component: AboutComponent},
  {path: "login", component: LoginComponent},
  {path: "cadastrar", component: CadastroComponent},
<<<<<<< HEAD
  {path: "inicio", component: InicioComponent},
  {path: "sobre", component: SobreComponent},
  {path: "meu-perfil", component: MeuPerfilComponent}
=======
  {path: "inicio", component: InicioComponent}
  

>>>>>>> 3dbad889b376a0f094ae341dd7a589f45d919c6a
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
