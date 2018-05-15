import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Merchandise } from './merchandise';

@Injectable()
export class MerchandiseService {

    merchandisesUrl = 'http://localhost:64384/MerchandiseServicePoint/GetMerchandise';

    constructor(private http: HttpClient) { }

    getMerchandises(): Observable<Merchandise[]> {
        return this.http.get<Merchandise[]>(this.merchandisesUrl);
    }   
}