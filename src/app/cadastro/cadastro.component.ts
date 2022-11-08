import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public rows: any[] = [];
  public filteredRows: BehaviorSubject<any[]> = new BehaviorSubject([]);
  private _searchTerm: string;

  constructor() { }

  ngOnInit(): void {
    this.rows = [{ nm_fornecedor: 'forn1', nr_telefone: '47 33303556', nr_celular: '47 99965454', ds_email: 'asdas@Asdasd.com', ds_contato: '1231231' }, { nm_fornecedor: 'forn2', nr_telefone: '47 333035545', nr_celular: '47 99965323', ds_email: 'asdas@ssss.com', ds_contato: '222222222' }];
    this.filteredRows.next([{ nm_fornecedor: 'forn1', nr_telefone: '47 33303556', nr_celular: '47 99965454', ds_email: 'asdas@Asdasd.com', ds_contato: '1231231' }, { nm_fornecedor: 'forn2', nr_telefone: '47 333035545', nr_celular: '47 99965323', ds_email: 'asdas@ssss.com', ds_contato: '222222222' }]);
  }

  public set searchTerm(value: string) {
    this._searchTerm = value;
    !value ? this.filteredRows.next(this.rows) : this.filteredRows.next(this.filterFornecedores(value));
  }

  public get searchTerm(): string {
    return this._searchTerm
  }

  filterFornecedores(searchString: string) {
    return this.rows.filter(fornecedor => this.removeAcentos(fornecedor.nm_fornecedor.toLowerCase())
      .indexOf(this.removeAcentos(searchString.toLowerCase())) !== -1);
  }

  public removeAcentos(newStringComAcento): string {

    if (!newStringComAcento) {
      return '';
    } else if (newStringComAcento === null) {
      alert('Campo descrição nulo');
    }

    let str = newStringComAcento;

    const mapaAcentosHex = {
      a: /[\xE0-\xE6]/g,
      A: /[\xC0-\xC6]/g,
      e: /[\xE8-\xEB]/g,
      E: /[\xC8-\xCB]/g,
      i: /[\xEC-\xEF]/g,
      I: /[\xCC-\xCF]/g,
      o: /[\xF2-\xF6]/g,
      O: /[\xD2-\xD6]/g,
      u: /[\xF9-\xFC]/g,
      U: /[\xD9-\xDC]/g,
      c: /\xE7/g,
      C: /\xC7/g,
      n: /\xF1/g,
      N: /\xD1/g,
    };

    for (const letra in mapaAcentosHex) {
      const expressaoRegular = mapaAcentosHex[letra];
      str = str.replace(expressaoRegular, letra);
    }

    return str;
  }

  async deleteFornecedor(list) {
    try {

      for (let index = 0; index < list.length; index++) {
        // await this._fornecedorService.deleteFornecedor(list[index].id, 'FornecedorComponent');
      }

    } catch (error) {
      console.error(error);
    }
  }

}
