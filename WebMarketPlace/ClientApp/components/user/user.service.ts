import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from './user';

@Injectable()
export class UserService {

    userUrl = 'http://localhost:64384/Account/';
    is_authorized: boolean = false;
    @Output() updated = new EventEmitter();
    @Output() authorized = new EventEmitter();

    updatedToggle() {
        this.updated.emit();
    }

    authorizedToggle() {
        this.is_authorized = !this.is_authorized;
        this.authorized.emit();
    }

    constructor(private http: HttpClient) { }

    getUser(): Observable<User> {
        return this.http.get<User>(this.userUrl + 'GetCurrentUser', { headers: new HttpHeaders({ 'Authorization': `Bearer ${sessionStorage.getItem('access_token')}` }) });
    }   

    updateUser(user: User): Observable<User> {
        return this.http.post<User>(this.userUrl + 'UpdateUser', user, { headers: new HttpHeaders({ 'Authorization': `Bearer ${sessionStorage.getItem('access_token')}` }) });
    }
}