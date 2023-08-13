import { Component, OnInit } from '@angular/core';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

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

}
