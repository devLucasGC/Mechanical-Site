import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public users: any[] = [];
  public filteredRows: BehaviorSubject<any[]> = new BehaviorSubject([]);
  public selectedRows: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(
    public _router: Router,
    public _snackBar: MatSnackBar,
    private _http: HttpClient,
  ) { }

  public login(obj: any): void {
    if (JSON.parse(localStorage.getItem('usuarioLogado')) && JSON.parse(localStorage.getItem('senhaLogada')) === obj.password) {
      this._router.navigate(['cadastro']);
      return;
    }

    if (this.users.length === 0) {
      let snackBarRef = this._snackBar.open('Nenhum usuário cadastrado no sistema!', 'OK', { duration: 4000, horizontalPosition: 'center', verticalPosition: 'top' });
    }

    this.users.forEach((user) => {
      if (user.user === obj.login && user.senha === obj.password) {
        this._router.navigate(['cadastro']);
        return;
      } else {
        let snackBarRef = this._snackBar.open('Usuário ou senha incorretos!', 'OK', { duration: 4000, horizontalPosition: 'center', verticalPosition: 'top' });
      }
    });
  }

  public logout(): void {
    this._router.navigate(['login']);
  }

  public cadastrar(obj: any): void {
    this.users.push(obj);
    localStorage.setItem('usuarioLogado', JSON.stringify(obj.user));
    localStorage.setItem('senhaLogada', JSON.stringify(obj.senha));
    let snackBarRef = this._snackBar.open('Usuário cadastrado com sucesso!', 'OK', { duration: 4000 });
  }

  public trocarSenha(obj: any): void {
    for (let index = 0; index < this.users.length; index++) {
      if (this.users[index].user === obj.user) {
        this.users[index].senha = obj.senha1;
        localStorage.setItem('senhaLogada', JSON.stringify(obj.senha1));
        let snackBarRef = this._snackBar.open('Senha trocada com sucesso!', 'OK', { duration: 4000 });
      }
    }
  }

  public inserirPeca(peca: any): any {
    if (peca.id) {
      return this._http.put(`http://localhost:8080/api/pecas/${peca.id}`, peca);
    } else {
      return this._http.post(`http://localhost:8080/api/pecas`, peca);
    }
  }

  public deletarPeca(id): any {
    return this._http.delete(`http://localhost:8080/api/pecas/${id}`);
  }

  public listarPecas() {
    return this._http.get(`http://localhost:8080/api/pecas`).subscribe((response: any) => {
      this.filteredRows.next(response);
    });
  }
}
