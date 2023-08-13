import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {

  @Input()
  public itemParaEditar!: Item;

  valorItem!: string;

  constructor(private listaDeComprasService: ListaDeCompraService) { }

  ngOnInit(): void { }

  public adicionarItem(): void {
    this.listaDeComprasService.adicionarItemNaLista(this.valorItem);
    this.limparCampo();
  }

  private limparCampo(): void {
    this.valorItem = '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['itemParaEditar'].isFirstChange()) {
      this.valorItem = this.itemParaEditar.nome;
    }
  }

}
