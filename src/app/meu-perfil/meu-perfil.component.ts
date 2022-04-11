import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Comentario } from '../model/Comentario';
import { Postagem } from '../model/Postagem';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { ComentarioService } from '../service/comentario.service';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.component.html',
  styleUrls: ['./meu-perfil.component.css']
})
export class MeuPerfilComponent implements OnInit {

  postagem: Postagem = new Postagem()
  usuario: Usuario = new Usuario()
  comentario: Comentario = new Comentario()
  listaPostagem: Postagem[]
  listaComentario: Comentario[]

  idUser = environment.id
  nome = environment.nome
  foto = environment.foto
  fotoUser: string
  nomeUser: string
  sensivel: boolean

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private comentarioService: ComentarioService,
    private authService: AuthService) { }

  ngOnInit() {

    this.findAllPostagens()
    this.authService.refreshToken()
    this.buscarIdUsuario()
  }

  buscarIdUsuario(){
    this.authService.getByIdUsuario(this.idUser).subscribe((resp: Usuario) => {
      this.usuario = resp
      this.fotoUser = this.usuario.foto
      this.nomeUser = this.usuario.nome
    })
  }

  //! Metodos Postagem

  findAllPostagens(){
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[])=>{
      this.listaPostagem = resp
    })
  }

  getPostagemById(id: number) {
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem = resp
      console.log(id)
    })
  }

  editarPostagem() {
    this.postagem.sensivel = this.sensivel

    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem editada com sucesso!')
      this.findAllPostagens()
    })
  }

  deletarPostagem() {
    this.postagemService.deletePostagem(this.postagem.idPostagem).subscribe(() => {
      alert('Postagem excluída com sucesso!')
      this.findAllPostagens()
    })
  }

  //! Metodos Comentario

  findAllComentarios() {
    this.comentarioService.getAllComentarios().subscribe((resp: Comentario[]) => {
      this.listaComentario = resp
    })
  }

  getComentarioById(id: number) {
    this.comentarioService.getByIdComentario(id).subscribe((resp: Comentario) => {
      this.comentario = resp
    })
  }

  editarComentario(id: number, idPostagem: number) {
    this.comentario.sensivel = this.sensivel
    this.comentario.idCom = id

    this.postagem.idPostagem = idPostagem
    this.comentario.postagem = this.postagem

    this.comentarioService.putComentario(this.comentario).subscribe((resp: Comentario) => {
      this.comentario = resp
      alert('Comentario editada com sucesso!')
      this.comentario = new Comentario()
      this.findAllPostagens()
    })
  }

  deletarComentario() {
    
    this.comentarioService.deleteComentario(this.comentario.idCom).subscribe(() => {
      alert('Comentário excluído com sucesso!')
      this.findAllComentarios()
    })
  }

}
