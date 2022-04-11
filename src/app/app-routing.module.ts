import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "cadastrar", component: CadastroComponent},
  {path: "inicio", component: InicioComponent},
  {path: "sobre", component: SobreComponent},
  {path: "meu-perfil", component: MeuPerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
