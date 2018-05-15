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
var MerchandiseComponent = /** @class */ (function () {
    function MerchandiseComponent(merchandiseService) {
        this.merchandiseService = merchandiseService;
    }
    MerchandiseComponent.prototype.ngOnInit = function () {
        this.getMerchandises();
    };
    MerchandiseComponent.prototype.getMerchandises = function () {
        this.merchandises$ = this.merchandiseService.getMerchandises();
    };
    MerchandiseComponent = __decorate([
        Component({
            selector: 'merchandise',
            templateUrl: './merchandise.component.html',
            styleUrls: ['./merchandise.component.css'],
            providers: [MerchandiseService]
        }),
        __metadata("design:paramtypes", [MerchandiseService])
    ], MerchandiseComponent);
    return MerchandiseComponent;
}());
export { MerchandiseComponent };
//# sourceMappingURL=merchandise.component.js.map