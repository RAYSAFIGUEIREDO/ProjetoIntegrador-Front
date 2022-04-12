import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UsuarioLogin = new UsuarioLogin()

  constructor(
    private auth: AuthService,
    private route: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  entrar() {
    this.auth.entrar(this.userLogin).subscribe({
      next: (resp: UsuarioLogin) => {
        this.userLogin = resp
        environment.token = this.userLogin.token
        environment.nome = this.userLogin.nome
        environment.foto = this.userLogin.foto
        environment.id = this.userLogin.id
        environment.bio = this.userLogin.bio
        this.route.navigate(["/inicio"])
      },
      error: erro => {
        if (erro.status == 500) {
          alert("Usuario ou senhas estão incorretos.")
        }
      },
    });
  }
}

