import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  constructor() { }

  public rows = [{'nome': "Gabriel", 'idade': 24}];
  public selected = {};
  public displayCheck;

  ngOnInit(): void {
  }

  public onSelect(event): void {
    console.log('selecionado');
  }

  public deleteItem(): void {
    console.log('deletado');
  }

}
