import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Merchandise } from './merchandise';

@Injectable()
export class MerchandiseService {

    merchandisesUrl = 'http://localhost:64384/MerchandiseServicePoint/';
    @Output() counted = new EventEmitter();

    countedToggle() {
        this.counted.emit();
    }

    constructor(private http: HttpClient) { }

    getMerchandises(): Observable<Merchandise[]> {
        return this.http.get<Merchandise[]>(this.merchandisesUrl + 'GetMerchandises');
    } 

    addMerchandiseToBasket(merchandise: Merchandise) {
        return this.http.post(this.merchandisesUrl + 'AddMerchandiseToBasket', merchandise, { headers: new HttpHeaders({ 'Authorization': `Bearer ${sessionStorage.getItem('access_token')}` }) });
    }

    deleteMerchandiseFromBasket(merchandise: Merchandise) {
        return this.http.post(this.merchandisesUrl + 'DeleteMerchandiseFromBasket', merchandise, { headers: new HttpHeaders({ 'Authorization': `Bearer ${sessionStorage.getItem('access_token')}` }) });
    }

    getBasketItems(): Observable<Merchandise[]> {
        return this.http.get<Merchandise[]>(this.merchandisesUrl + 'GetBasketItems', { headers: new HttpHeaders({ 'Authorization': `Bearer ${sessionStorage.getItem('access_token')}` }) });
    }

    buyItems() {
        return this.http.get(this.merchandisesUrl + 'BuyItems', { headers: new HttpHeaders({ 'Authorization': `Bearer ${sessionStorage.getItem('access_token')}` }) });
    }
}