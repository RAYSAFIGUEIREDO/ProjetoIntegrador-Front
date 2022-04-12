import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario = new Usuario()
  confirmarSenha: string
  tipoUsuario: string
  pronomeUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  pronomeUser(event: any){
    this.pronomeUsuario = event.target.value
  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  cadastrar() {
    this.usuario.tipo = this.tipoUsuario
    this.usuario.pronome = this.pronomeUsuario

    if(this.usuario.senha != this.confirmarSenha){
      alert("As senhas estão incorretas! ⛔")

    } else {
      this.authService.cadastrar(this.usuario).subscribe({
        next: (resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/login'])
        alert("Usuario cadastrado com sucesso! ✅")
      },
      error: erro =>{
        if(erro.status == 500){
          alert("Favor preencher os campos")
        }
      },
    })
    }
  }
}