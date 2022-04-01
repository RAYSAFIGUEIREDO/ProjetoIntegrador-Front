import { Comentario } from "./Comentario"

export class Usuario {
    
    public id: number
    public usuario: string
    public senha: string
    public nome: string
    public foto: string
    public tipo: string
    public pronome: string
    public comentarios: Comentario[]
}