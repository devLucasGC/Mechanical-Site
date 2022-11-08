import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  constructor() { }

  public selected = [];
  public dataSource: any[] = [];
  public displayedColumns: string[] = ['codigo', 'nome', 'quantidade', 'preco', 'fornecedor', 'telefone'];

  @Input() rows: any;
  @Output() onDeleteFornecedor = new EventEmitter();

  ngOnInit(): void {
    this.dataSource = [
      // { codigo: '', nome: '', quantidade: '', preco: '', fornecedor: '', telefone: '' }
    ];
  }

}
