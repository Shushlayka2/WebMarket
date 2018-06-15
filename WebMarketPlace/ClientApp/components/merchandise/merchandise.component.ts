import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MerchandiseService } from './merchandise.service';
import { UserService } from '../user/user.service';
import { Merchandise } from './merchandise';

@Component({
    selector: 'merchandise',
    templateUrl: './merchandise.component.html',
    styleUrls: ['./merchandise.component.css']
})
export class MerchandiseComponent implements OnInit{

    is_authorized: boolean = false;
    merchandises$: Observable<Merchandise[]>;

    constructor(private merchandiseService: MerchandiseService, private userService: UserService) { }

    ngOnInit() {
        this.is_authorized = this.userService.is_authorized;
        this.userService.authorized.subscribe(() => {
            this.authorizedSwitch();
        });
        this.getMerchandises();    
    }

    getMerchandises() {
        this.merchandises$ = this.merchandiseService.getMerchandises();
    }

    authorizedSwitch() {
        this.is_authorized = this.userService.is_authorized;
    }

    addToBasket(merchandise: Merchandise) {
        this.merchandiseService.addMerchandiseToBasket(merchandise).subscribe(() => this.merchandiseService.countedToggle());
    }
}