import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MerchandiseService } from './merchandise.service';
import { Merchandise } from './merchandise';


@Component({
    selector: 'merchandise',
    templateUrl: './merchandise.component.html',
    styleUrls: ['./merchandise.component.css'],
    providers: [MerchandiseService]
})
export class MerchandiseComponent implements OnInit{

    merchandises$: Observable<Merchandise[]>;

    constructor(private merchandiseService: MerchandiseService) { }

    ngOnInit() {
        this.getMerchandises();    
    }

    getMerchandises() {
        this.merchandises$ = this.merchandiseService.getMerchandises();
    }
}