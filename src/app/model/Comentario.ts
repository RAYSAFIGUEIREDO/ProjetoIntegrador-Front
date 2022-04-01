import { Postagem } from "./Postagem"
import { Usuario } from "./Usuario"

export class Comentario {
    
    public idCom: number
    public data: Date
    public texto: string
    public sensivel: boolean
    public postagem: Postagem
    public usuario: Usuario
}