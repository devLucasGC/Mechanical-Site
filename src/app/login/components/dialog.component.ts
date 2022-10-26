import { Component, Inject } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HomeService } from "src/app/home.service";

export interface DialogData {
    password: boolean;
}

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: './dialog.html',
})
export class DialogOverviewExampleDialog {
    constructor(
        public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
        private _formBuilder: FormBuilder,
        private _homeService: HomeService,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) { }

    public formGrupo: FormGroup;
    public formGrupoCadastro: FormGroup;

    ngOnInit(): void {
        this.formBuilder();
    }

    public formBuilder(): void {
        this.formGrupo = this._formBuilder.group(
            {
                user: ['', [Validators.required]],
                senha1: ['', [Validators.required]],
                senha2: ['', [Validators.required]],
            }
        );

        this.formGrupoCadastro = this._formBuilder.group(
            {
                user: ['', [Validators.required]],
                senha: ['', [Validators.required]]
            }
        );
    }

    public mudarSenha(): void {
        this._homeService.trocarSenha(this.formGrupo.getRawValue());
        this.dialogRef.close();
    }

    public criarConta(): void {
        this._homeService.cadastrar(this.formGrupoCadastro.getRawValue());
        this.dialogRef.close();
    }

    public validarSenha(): boolean {
        if (!this.formGrupo.valid ||
            this.formGrupo.get('senha1').value !== this.formGrupo.get('senha2').value) {
            return true;
        } else {
            false;
        }
    }
}