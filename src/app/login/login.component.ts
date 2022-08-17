import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login: string = "";
  public password: string = "";
  public savePassword: boolean = false;
  public emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  public matcher: boolean = false;
  public hide: boolean = true;

  constructor(private _router: Router) {

  }

  ngOnInit(): void {
    // $('.modal-trigger').leanModal();
  }

  public clickLogin(): void {
    this._router.navigate(['/tutorial']);
  }

}
