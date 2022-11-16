import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HomeService } from '../home.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(
        private _router: Router,
        private _homeService: HomeService
    ) { }

    public canActivate(): boolean {
        if (this._homeService.users.length === 0) {
            this._router.navigate(['login']);
            return false;
        }
        return true;
    }
}
