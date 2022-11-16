import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import $ from "jquery";
import { HomeService } from '../home.service';
import { DialogOverviewExampleDialog } from './components/dialog.component';

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
    private _formBuilder: FormBuilder,
    public dialog: MatDialog,
    private _homeService: HomeService) {

  }

  public openDialog(password: boolean): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { password: password },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
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
    if (JSON.parse(localStorage.getItem('usuarioLogado')) && JSON.parse(localStorage.getItem('senhaLogada'))) {
      this.formGrupo = this._formBuilder.group(
        {
          login: [JSON.parse(localStorage.getItem('usuarioLogado')), [Validators.required, Validators.maxLength(120)]],
          password: [JSON.parse(localStorage.getItem('senhaLogada')), [Validators.required, Validators.maxLength(8)]],
        }
      );
    } else {
      this.formGrupo = this._formBuilder.group(
        {
          login: ['', [Validators.required, Validators.maxLength(120)]],
          password: ['', [Validators.required, Validators.maxLength(8)]],
        }
      );
    }
  }

  public logar(): void {
    this._homeService.login(this.formGrupo.getRawValue());
  }

}
