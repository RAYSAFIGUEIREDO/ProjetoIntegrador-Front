import { Comentario } from "./Comentario"
import { Postagem } from "./Postagem"

export class Usuario {
    
    public id: number
    public usuario: string
    public senha: string
    public nome: string
    public foto: string
    public tipo: string
    public pronome: string
    public bio: string
    public postagem: Postagem[]
    public comentarios: Comentario[]
}