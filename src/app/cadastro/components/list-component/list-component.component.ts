import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  constructor() { }
  public displayedColumns: string[] = ['id', 'nome', 'quantidade', 'preco', 'fornecedor', 'telefone', 'button'];

  @Output() onPatchValue = new EventEmitter();
  @Input() rows: any;

  ngOnInit(): void { }

  public onUpdate(element: any) {
    this.onPatchValue.emit(element);
  }

}
