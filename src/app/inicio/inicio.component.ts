import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

    postagem: Postagem = new Postagem();
    listaPostagem: Postagem[];

  constructor
  ( private router: Router,
    private postagemService: PostagemService
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      //alert('Sua sessão expirou, faça o login novamente.')
      this.router.navigate(['/login'])
    }
    this.findAllPostagens()
  
  }

  findAllPostagens(){
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[])=>{
      this.listaPostagem = resp;
    })
  }

}
