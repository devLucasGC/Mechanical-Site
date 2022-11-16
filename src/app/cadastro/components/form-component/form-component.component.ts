import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  public form: FormGroup;

  @Output() onAtualizaLista = new EventEmitter();

  constructor(
    private _formBuilder: FormBuilder,
    private _homeService: HomeService,
    public _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this._homeService.selectedRows
      .subscribe((res) => {
        if (res.nome) {
          this.form.patchValue(res);
        }
      });

    this.buildForm();
  }

  private buildForm(): void {
    this.form = this._formBuilder.group({
      id: [null],
      nome: [null, [Validators.required]],
      quantidade: [null, [Validators.required]],
      preco: [null, [Validators.required]],
      fornecedor: [null, [Validators.required]],
      telefone: [null, [Validators.required]]
    });
  }

  public addPeca() {
    this._homeService.inserirPeca(this.form.getRawValue()).toPromise().then(() => {
      if (this.form.get("id").value) {
        let snackBarRef = this._snackBar.open('Peça atualizada com sucesso!', 'OK', { duration: 4000 });
        this.buildForm();
        this.onAtualizaLista.emit();
      } else {
        let snackBarRef = this._snackBar.open('Peça inserida com sucesso!', 'OK', { duration: 4000 });
        this.buildForm();
        this.onAtualizaLista.emit();
      }

    });
  }

  public deletePeca() {
    if (this.form.get("id").value) {
      this._homeService.deletarPeca(this.form.get("id").value).toPromise().then(() => {
        let snackBarRef = this._snackBar.open('Peça deletada com sucesso!', 'OK', { duration: 4000 });
        this.buildForm();
        this.onAtualizaLista.emit();
      });
    } return;
  }

}
