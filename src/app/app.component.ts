import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title = 'ClickMotor';
  public selected: string = 'Home';
  public fillerNav = [
    {
      nome: "Home",
    },
    {
      nome: "Cadastro",
    },
    {
      nome: "Banco",
    },
    {
      nome: "Sair"
    }
  ]
  public isLogin: boolean;

  constructor(public _router: Router) {
    this._router.getCurrentNavigation();
  }

  public selection(name: string): void {
    this.selected = name;

    if (name === 'Sair') {
      this._router.navigate(['login']);
    }
  }
}
