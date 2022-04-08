import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Comentario } from '../model/Comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllComentarios(): Observable<Comentario[]> {
    return this.http.get<Comentario[]>('https://home-plus.herokuapp.com/postagens/comentarios', this.token)
  }

  getByIdComentario(id: number): Observable<Comentario> {
    return this.http.get<Comentario>(`https://home-plus.herokuapp.com/postagens/${id}`, this.token)
  }

  postComentario(comentario: Comentario): Observable<Comentario> {
    return this.http.post<Comentario>('https://home-plus.herokuapp.com/postagens/', comentario, this.token)
  }

  putComentario(comentario: Comentario): Observable<Comentario> {
    return this.http.put<Comentario>('https://home-plus.herokuapp.com/postagens/', comentario, this.token)
  }

  deleteComentario(id: number) {
    return this.http.delete<Comentario>(`https://home-plus.herokuapp.com/postagens/${id}`, this.token)
  }
}


