import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://home-plus.herokuapp.com/usuario/logar', usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://home-plus.herokuapp.com/usuario/cadastrar', usuario)
  }

  getByIdUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`https://home-plus.herokuapp.com/usuario/${id}`, this.token)
  }

  atualizar(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>('https://home-plus.herokuapp.com/usuario/atualizar', usuario, this.token)
  }

  deletar(id: number) {
    return this.http.delete<Usuario>(`https://home-plus.herokuapp.com/usuario/${id}`, this.token)
  }

  logado(){
    let ok: boolean = false

    if (environment.token != ''){
      ok = true
    }
    
    return ok
  }
}
