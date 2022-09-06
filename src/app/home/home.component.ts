import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public name: string = "";
  public code: string = "";
  public quantity: string = "";
  public buyPrice: string = "";
  public sellPrice: string = "";
  public provider: string = "";
  public telephoneNumber: string = "";

  public formGrupo: FormGroup;

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder) {
    }

  ngOnInit(): void {
    this.formBuilder();
  }

  public formBuilder(): void {
    this.formGrupo = this._formBuilder.group(
      {
        name: ['', [Validators.required, Validators.maxLength(120)]],
        code: ['', [Validators.required, Validators.maxLength(30)]],
        quantity: ['', [Validators.required, Validators.maxLength(10)]],
        buyPrice: ['', [Validators.required, Validators.maxLength(10)]],
        sellPrice: ['', [Validators.required, Validators.maxLength(10)]],
        provider: ['', [Validators.required, Validators.maxLength(60)]],
        telephoneNumber: ['', [Validators.required, Validators.maxLength(13)]],
      }
    );
  }

}
