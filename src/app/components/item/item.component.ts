import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  public item!: Item;

  @Output()
  private emitindoItemParaEditar: EventEmitter<any> = new EventEmitter();

  @Output()
  private emitindoIdParaExcluir: EventEmitter<any> = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void { }

  public editarItem(): void {
    this.emitindoItemParaEditar.emit(this.item);
  }

  public excluirItem(): void {
    this.emitindoIdParaExcluir.emit(this.item.id);
  }

  alterarPropriedadeComprado() {
    this.item.comprado = !this.item.comprado;
  }

}
