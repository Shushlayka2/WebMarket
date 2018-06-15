var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { MerchandiseService } from '../merchandise/merchandise.service';
var BasketComponent = /** @class */ (function () {
    function BasketComponent(merchandiseService) {
        this.merchandiseService = merchandiseService;
        this.total_price = 0;
        this.is_hidden = "hidden";
    }
    BasketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.merchandiseService.getBasketItems().subscribe(function (m) {
            _this.merchandise = m;
            _this.countTotalPrice();
        });
    };
    BasketComponent.prototype.deleteMerchandiseFromBasket = function (merchandise) {
        var _this = this;
        this.merchandiseService.deleteMerchandiseFromBasket(merchandise).subscribe(function () {
            _this.merchandiseService.getBasketItems().subscribe(function (m) {
                _this.merchandise = m;
                _this.countTotalPrice();
            });
            _this.merchandiseService.countedToggle();
        });
    };
    BasketComponent.prototype.countTotalPrice = function () {
        var _this = this;
        this.total_price = 0;
        this.merchandise.forEach(function (m) { return _this.total_price += +m.price; });
        this.total_price = Math.round(this.total_price * 1000) / 1000;
    };
    BasketComponent.prototype.buyItems = function () {
        var _this = this;
        if (this.merchandise.length > 0) {
            this.is_hidden = "";
            this.merchandiseService.buyItems().subscribe(function () {
                _this.merchandiseService.getBasketItems().subscribe(function (m) {
                    _this.merchandise = m;
                    _this.countTotalPrice();
                    _this.merchandiseService.countedToggle();
                });
            });
        }
    };
    BasketComponent = __decorate([
        Component({
            selector: 'basket',
            templateUrl: './basket.component.html',
            styleUrls: ['./basket.component.css']
        }),
        __metadata("design:paramtypes", [MerchandiseService])
    ], BasketComponent);
    return BasketComponent;
}());
export { BasketComponent };
//# sourceMappingURL=basket.component.js.map