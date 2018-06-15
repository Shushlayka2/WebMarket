import { Component } from '@angular/core';

import { AuthorizationService } from './authorization.service';
import { MerchandiseService } from '../merchandise/merchandise.service';
import { UserService } from '../user/user.service';
import { Register } from './register';
import { Login } from './login'; 

@Component({
    selector: 'authorization',
    templateUrl: 'authorization.component.html',
    styleUrls: ['authorization.component.css'],
    providers: [AuthorizationService]
})
export class AuthorizationComponent {

    register: Register = new Register();
    login: Login = new Login();
    response_error_msg: string;
    is_hidden: string = "hidden";

    constructor(private authorizationService: AuthorizationService, private userService: UserService, private merchandiseService: MerchandiseService) { }

    sendRegisterData(): void {
        this.authorizationService.sendRegisterData(this.register)
            .subscribe(
            data => {
                sessionStorage.setItem('access_token', data);
                this.is_hidden = "hidden";
                this.userService.authorizedToggle();
                this.merchandiseService.countedToggle();
            },
            error => {
                this.response_error_msg = error;
                this.is_hidden = "";
            });
    }

    sendLogInData(): void {
        this.authorizationService.sendLogInData(this.login)
            .subscribe(
            data => {
                sessionStorage.setItem('access_token', data);
                this.is_hidden = "hidden";
                this.userService.authorizedToggle();
                this.merchandiseService.countedToggle();
            },
            error => {
                this.response_error_msg = error;
                this.is_hidden = "";
            });    
    }
}