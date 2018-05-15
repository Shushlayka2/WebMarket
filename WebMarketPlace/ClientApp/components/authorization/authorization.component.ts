import { Component, Output, EventEmitter } from '@angular/core';
import { AuthorizationService } from './authorization.service';
import { Register } from './register';
import { Login } from './login';
import { HttpResponse } from '@angular/common/http';

@Component({
    selector: 'authorization',
    templateUrl: 'authorization.component.html',
    styleUrls: ['authorization.component.css'],
    providers: [AuthorizationService]
})
export class AuthorizationComponent {
    register: Register = new Register();
    login: Login = new Login();
    isHidden: string = "hidden";
    responseError: string;

    @Output() onAuthorized = new EventEmitter();

    constructor(private authorizationService: AuthorizationService) { }

    sendRegisterData(): void {
        this.authorizationService.sendRegisterData(this.register).subscribe((response) => this.responseError = response);
        this.onAuthorized.emit();
        this.isHidden = "";
    }

    sendLogInData(): void {
        this.authorizationService.sendLogInData(this.login).subscribe();
    }
}