import { Component, OnInit } from '@angular/core';

import { UserService } from '../user/user.service';
import { MerchandiseService } from '../merchandise/merchandise.service';
import { User } from '../user/user';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit{

    user: User = new User();
    is_authorized: boolean = false;
    merchandise_count: number = 0;

    constructor(private userService: UserService, private merchandiseService: MerchandiseService) { }

    onAuthorized() {
        this.is_authorized = this.userService.is_authorized;
        if (this.is_authorized)
            this.userService.getUser().subscribe(user => this.user = user);
    }

    ngOnInit() {
        this.userService.updated.subscribe(() => {
            this.userService.getUser().subscribe(user => this.user = user);           
        });

        this.userService.authorized.subscribe(() => {
            this.onAuthorized();
        });

        this.merchandiseService.counted.subscribe(() => {
            this.merchandiseService.getBasketItems().subscribe(merchandises => this.merchandise_count = merchandises.length);
        });
    }

    logout() {
        sessionStorage.removeItem('access_token');
        this.userService.authorizedToggle();
    }
}