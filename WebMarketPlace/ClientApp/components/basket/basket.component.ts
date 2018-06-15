import { Component, OnInit } from '@angular/core';

import { MerchandiseService } from '../merchandise/merchandise.service';
import { Merchandise } from '../merchandise/merchandise';

@Component({
    selector: 'basket',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

    merchandise: Merchandise[];
    total_price: number = 0;
    is_hidden: string = "hidden";

    constructor(private merchandiseService: MerchandiseService) { }

    ngOnInit() {
        this.merchandiseService.getBasketItems().subscribe(m => {
            this.merchandise = m;
            this.countTotalPrice();
        });
    }

    deleteMerchandiseFromBasket(merchandise: Merchandise) {
        this.merchandiseService.deleteMerchandiseFromBasket(merchandise).subscribe(() => {
            this.merchandiseService.getBasketItems().subscribe(m => {
                this.merchandise = m;
                this.countTotalPrice();
            });
            this.merchandiseService.countedToggle();
        });
    }

    countTotalPrice() {
        this.total_price = 0;
        this.merchandise.forEach(m => this.total_price += +m.price);
        this.total_price = Math.round(this.total_price * 1000) / 1000;
    }

    buyItems() {
        if (this.merchandise.length > 0) {
            this.is_hidden = "";
            this.merchandiseService.buyItems().subscribe(() => {
                this.merchandiseService.getBasketItems().subscribe(m => {
                    this.merchandise = m;
                    this.countTotalPrice();
                    this.merchandiseService.countedToggle();
                });
            });
        }
    }
}