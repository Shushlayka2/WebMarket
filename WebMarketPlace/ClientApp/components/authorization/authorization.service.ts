import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import { Register } from './register';
import { Login } from './login';

@Injectable()
export class AuthorizationService {

    registerUrl = 'http://localhost:64384/Account/Register';

    constructor(private http: HttpClient) { }

    sendRegisterData(registerData: Register): Observable<string>{
        return this.http.post(this.registerUrl, registerData, { observe: 'response' })
            .pipe(
            map(response => response.statusText),
            catchError((err, response) => response)
            );
    }

    sendLogInData(loginData: Login) {
        return this.http.post(this.registerUrl, loginData);
    }
}