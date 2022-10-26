import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public dataBase: any[] = [];
  public users: any[] = [];
  public tools: any[] = [];

  constructor(
    public _router: Router,
    public _snackBar: MatSnackBar) { }

  public login(obj: any): void {
    if (this.users.length === 0) {
      let snackBarRef = this._snackBar.open('Nenhum usuário cadastrado no sistema!', 'OK', { duration: 4000, horizontalPosition: 'center', verticalPosition: 'top' });
    }

    this.users.forEach((user) => {
      if (user.user === obj.login && user.senha === obj.password) {
        this._router.navigate(['home']);
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
    let snackBarRef = this._snackBar.open('Usuário cadastrado com sucesso!', 'OK', { duration: 4000 });
  }

  public trocarSenha(obj: any): void {
    for (let index = 0; index < this.users.length; index++) {
      if (this.users[index].user === obj.user) {
        this.users[index].senha = obj.senha1;
        let snackBarRef = this._snackBar.open('Senha trocada com sucesso!', 'OK', { duration: 4000 });
      }
    }
  }
}
