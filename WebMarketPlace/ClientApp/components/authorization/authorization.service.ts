import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { catchError } from 'rxjs/operators';

import { Register } from './register';
import { Login } from './login';

@Injectable()
export class AuthorizationService {

    register_url = 'http://localhost:64384/Account/Register';
    login_url = 'http://localhost:64384/Account/Login';

    constructor(private http: HttpClient) { }

    sendRegisterData(registerData: Register) {
        return this.http.post(this.register_url, registerData)
            .pipe(
            catchError(this.handleError)
            );
    }

    sendLogInData(loginData: Login) {
        return this.http.post(this.login_url, loginData)
            .pipe(
            catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
        return Observable.throw(error.message || "Server error!");
    }
}