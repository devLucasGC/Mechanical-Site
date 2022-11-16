import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title = 'ClickMotor';
  public fillerNav = [
    {
      nome: "Cadastro",
    },
    {
      nome: "Sair"
    }
  ]
  public isLogin: boolean;

  ngOnInit() {
    this._router.navigate(['/login']);
  }

  constructor(public _router: Router) {
    this._router.getCurrentNavigation();
  }

  public selection(name: string): void {
    if (name === 'Sair') {
      this._router.navigate(['login']);
    }
  }
}
