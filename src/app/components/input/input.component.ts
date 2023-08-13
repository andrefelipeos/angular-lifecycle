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

  public editando: boolean = false;
  public textoDoBotao: string = "Salvar Item";
  public valorItem!: string;

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
      this.editando = true;
      this.textoDoBotao = "Editar Item";
      this.valorItem = this.itemParaEditar.nome;
    }
  }

  public editarItem(): void {
    this.listaDeComprasService.editarItemDaLista(this.itemParaEditar, this.valorItem);
    this.limparCampo();
    this.editando = false;
    this.textoDoBotao = "Salvar Item";
  }

}
