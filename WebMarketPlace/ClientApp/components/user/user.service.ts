import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from './user';

//import { Subject } from 'rxjs';

@Injectable()
export class UserService {
    userUrl = 'http://localhost:64384/Account/';

    //user: User = new User();

    //public userSource = new Subject<any>();

    constructor(private http: HttpClient) { }

    getUser(): Observable<User> {
        return this.http.get<User>(this.userUrl + 'GetCurrentUser', { headers: new HttpHeaders({ 'Authorization': `Bearer ${sessionStorage.getItem('access_token')}` }) });
    }   

    updateUser(user: User) {
        return this.http.post(this.userUrl + 'UpdateUser', user, { headers: new HttpHeaders({ 'Authorization': `Bearer ${sessionStorage.getItem('access_token')}` }) });
    }
}