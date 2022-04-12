import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Comentario } from '../model/Comentario';
import { Postagem } from '../model/Postagem';
import { Usuario } from '../model/Usuario';
import { ComentarioService } from '../service/comentario.service';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

    postagem: Postagem = new Postagem()
    comentario: Comentario = new Comentario()
    usuario: Usuario = new Usuario()

    listaPostagem: Postagem[]
    listaComentario: Comentario[]
    listaPostagemComentario: Postagem

    sensivel: boolean
    idUser = environment.id
    nome = environment.nome
    foto = environment.foto
    bio = environment.bio

    temasUnicos: Postagem[]

  constructor
  ( private router: Router,
    private postagemService: PostagemService,
    private comentarioService: ComentarioService
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      //alert('Sua sessão expirou, faça o login novamente.')
      this.router.navigate(['/about'])
    }

    this.findAllPostagens()
    this.findAllComentarios()
  }

  findAllPostagens(){
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[])=>{
      this.listaPostagem = resp
      
      // this.temasUnicos = [...new Set(this.listaPostagem)]
      // console.log(this.temasUnicos)
    })
  }

  //! Metodos Postagem

  getPostagemById(id: number) {
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem = resp
      console.log(id)
    })
  }

  cadastrarPostagem() {
    this.postagem.sensivel = this.sensivel

    this.usuario.id = this.idUser
    this.postagem.usuario = this.usuario

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert ('Postagem feita com sucesso')
      this.findAllPostagens()
      this.postagem = new Postagem() 
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

  getComentarioById(id: number) {
    this.comentarioService.getByIdComentario(id).subscribe((resp: Comentario) => {
      this.comentario = resp
      console.log(id)
    })
  }

  findAllComentarios() {
    this.comentarioService.getAllComentarios().subscribe((resp: Comentario[]) => {
      this.listaComentario = resp
    })
  }

  cadastrarComentario(id:number){
    this.comentario.sensivel = this.sensivel

    this.postagem = new Postagem()
    this.postagem.idPostagem = id
    this.comentario.postagem = this.postagem

    this.usuario.id = this.idUser
    this.comentario.usuario = this.usuario
    
    this.comentarioService.postComentario(this.comentario).subscribe((resp: Comentario) => {
      this.comentario = resp
      alert("Comentario feito com sucesso!")
      this.comentario = new Comentario()
      this.findAllPostagens()
      
    })
  }

  editarComentario(id: number) {
    this.comentario.sensivel = this.sensivel
    this.comentario.idCom = id

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
      this.findAllPostagens()
    })
  }
}
