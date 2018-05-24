import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './components/user/user';
import { UserService } from './components/user/user.service';

@Injectable()
export class IntermediateService {

    private userAuthorizedSource = new Subject<string>();

    userAuthorized$ = this.userAuthorizedSource.asObservable();

    constructor(private userService: UserService, private http: HttpClient) { }

    userUrl = 'http://localhost:64384/Account/';
    user: User = new User();

    authorizeUser() {
        this.http.get<User>(this.userUrl + 'GetCurrentUser', { headers: new HttpHeaders({ 'Authorization': `Bearer ${sessionStorage.getItem('access_token')}` }) }).subscribe((data) => this.user = data);
        console.log(this.user);
        this.userAuthorizedSource.next(this.user.name);
    }
}