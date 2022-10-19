import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import $ from "jquery";

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
  public formGrupo: FormGroup;

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.formBuilder();
  }

  public focusIn(): void {
    $('div#formWrapper').addClass('darken-bg');
    $('div.logo').addClass('logo-active');
  }

  public focusOut(): void {
    $('div#formWrapper').removeClass('darken-bg');
    $('div.logo').removeClass('logo-active');
  }

  public formBuilder(): void {
    this.formGrupo = this._formBuilder.group(
      {
        login: ['', [Validators.required, Validators.maxLength(120)]],
        password: ['', [Validators.required, Validators.maxLength(8)]],
      }
    );
  }

  public logar(): void {
    this._router.navigate(['home']);
  }

}
