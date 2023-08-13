import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {

  title = 'app-lista-de-compras';
  listaDeCompras!: Array<Item>;
  public itemParaEditar!: Item;

  constructor(private listaDeComprasService: ListaDeCompraService) { }

  ngOnInit(): void {
    this.listaDeCompras = this.listaDeComprasService.getListaDeCompra();
  }

  ngDoCheck(): void {
    this.listaDeComprasService.atualizarLocalStorage();
  }

  public editarItem(item: Item): void {
    this.itemParaEditar = item;
  }

  public excluirItem(id: number): void {
    const index: number = this.listaDeCompras.findIndex(item => item.id === id);
    this.listaDeCompras.splice(index, 1);
  }

  public limparLista(): void {
    this.listaDeCompras = [];
    this.listaDeComprasService.limparLocalStorage();
  }

}
