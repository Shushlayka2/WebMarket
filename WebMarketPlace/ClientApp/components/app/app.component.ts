import { Component, /*OnDestroy, OnInit*/ } from '@angular/core';
//import { Subscription } from 'rxjs';

import { UserService } from '../user/user.service';
import { User } from '../user/user';


@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    providers: [UserService]
})

export class AppComponent /*implements OnDestroy, OnInit*/{

    user: User = new User();
    is_authorized: boolean;

    constructor(private userService: UserService) { }

    //TODO: Change it to service interaction
    onAuthorized() {
        this.is_authorized = true;
        this.userService.getUser().subscribe(user => this.user = user);
    }

    //subscription: Subscription;

    //ngOnInit() {
    //    this.subscription = this.userService.userSource.subscribe(
    //        user => {
    //            console.log('entered');
    //            this.user = user;
    //            console.log(this.user);
    //        });
    //}

    //ngOnDestroy(): void {
    //    this.subscription.unsubscribe();
    //}
}