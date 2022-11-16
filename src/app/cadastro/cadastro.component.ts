import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public rows: any[] = [];

  constructor(private _homeService: HomeService) { }

  ngOnInit(): void {
    this.atualizaLista();

    this._homeService.filteredRows.subscribe((list) => {
      if (list) {
        this.rows = list;
      }
    });
  }

  public atualizaLista(): void {
    this._homeService.listarPecas();
  }

  public onPatchValue(event: any): void {
    this._homeService.selectedRows.next(event);
  }
}
