var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var MerchandiseService = /** @class */ (function () {
    function MerchandiseService(http) {
        this.http = http;
        this.merchandisesUrl = 'http://localhost:64384/MerchandiseServicePoint/';
        this.counted = new EventEmitter();
    }
    MerchandiseService.prototype.countedToggle = function () {
        this.counted.emit();
    };
    MerchandiseService.prototype.getMerchandises = function () {
        return this.http.get(this.merchandisesUrl + 'GetMerchandises');
    };
    MerchandiseService.prototype.addMerchandiseToBasket = function (merchandise) {
        return this.http.post(this.merchandisesUrl + 'AddMerchandiseToBasket', merchandise, { headers: new HttpHeaders({ 'Authorization': "Bearer " + sessionStorage.getItem('access_token') }) });
    };
    MerchandiseService.prototype.deleteMerchandiseFromBasket = function (merchandise) {
        return this.http.post(this.merchandisesUrl + 'DeleteMerchandiseFromBasket', merchandise, { headers: new HttpHeaders({ 'Authorization': "Bearer " + sessionStorage.getItem('access_token') }) });
    };
    MerchandiseService.prototype.getBasketItems = function () {
        return this.http.get(this.merchandisesUrl + 'GetBasketItems', { headers: new HttpHeaders({ 'Authorization': "Bearer " + sessionStorage.getItem('access_token') }) });
    };
    MerchandiseService.prototype.buyItems = function () {
        return this.http.get(this.merchandisesUrl + 'BuyItems', { headers: new HttpHeaders({ 'Authorization': "Bearer " + sessionStorage.getItem('access_token') }) });
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MerchandiseService.prototype, "counted", void 0);
    MerchandiseService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], MerchandiseService);
    return MerchandiseService;
}());
export { MerchandiseService };
//# sourceMappingURL=merchandise.service.js.map