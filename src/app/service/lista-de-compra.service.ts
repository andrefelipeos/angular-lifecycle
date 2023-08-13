import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra!: Array<Item>;

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem("itens") || "[]");
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  adicionarItemNaLista(nomeDoItem: string): void {
    const item = this.criarItem(nomeDoItem);
    this.listaDeCompra.push(item);
  }

  private criarItem(nomeDoItem: string): Item {
    const id: number = this.listaDeCompra.length + 1;
    const item: Item = {
      id: id,
      nome: nomeDoItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false
    }
    return item;
  }

  public editarItemDaLista(itemParaEditar: Item, novoValorDoItem: string): void {
    const itemEditado: Item = {
      id: itemParaEditar.id,
      nome: novoValorDoItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: itemParaEditar.comprado
    }
    const id = itemParaEditar.id;
    this.listaDeCompra.splice(Number(id)-1, 1, itemEditado);
  }

  public atualizarLocalStorage(): void {
    localStorage.setItem("itens", JSON.stringify(this.listaDeCompra));
  }

}
