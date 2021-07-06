import { Produtos } from "./Produtos"
import { Usuario } from "./Usuario"

export class Venda{
    public idVenda: number
    public date : Date
    public titulo: string
    public metodoPagamento: string
    public usuario: Usuario
    public produto: Produtos
}