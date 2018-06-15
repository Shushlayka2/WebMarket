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
import { MerchandiseService } from './merchandise.service';
import { UserService } from '../user/user.service';
var MerchandiseComponent = /** @class */ (function () {
    function MerchandiseComponent(merchandiseService, userService) {
        this.merchandiseService = merchandiseService;
        this.userService = userService;
        this.is_authorized = false;
    }
    MerchandiseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.is_authorized = this.userService.is_authorized;
        this.userService.authorized.subscribe(function () {
            _this.authorizedSwitch();
        });
        this.getMerchandises();
    };
    MerchandiseComponent.prototype.getMerchandises = function () {
        this.merchandises$ = this.merchandiseService.getMerchandises();
    };
    MerchandiseComponent.prototype.authorizedSwitch = function () {
        this.is_authorized = this.userService.is_authorized;
    };
    MerchandiseComponent.prototype.addToBasket = function (merchandise) {
        var _this = this;
        this.merchandiseService.addMerchandiseToBasket(merchandise).subscribe(function () { return _this.merchandiseService.countedToggle(); });
    };
    MerchandiseComponent = __decorate([
        Component({
            selector: 'merchandise',
            templateUrl: './merchandise.component.html',
            styleUrls: ['./merchandise.component.css']
        }),
        __metadata("design:paramtypes", [MerchandiseService, UserService])
    ], MerchandiseComponent);
    return MerchandiseComponent;
}());
export { MerchandiseComponent };
//# sourceMappingURL=merchandise.component.js.map