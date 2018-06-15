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
import { UserService } from '../user/user.service';
import { MerchandiseService } from '../merchandise/merchandise.service';
import { User } from '../user/user';
var AppComponent = /** @class */ (function () {
    function AppComponent(userService, merchandiseService) {
        this.userService = userService;
        this.merchandiseService = merchandiseService;
        this.user = new User();
        this.is_authorized = false;
        this.merchandise_count = 0;
    }
    AppComponent.prototype.onAuthorized = function () {
        var _this = this;
        this.is_authorized = this.userService.is_authorized;
        if (this.is_authorized)
            this.userService.getUser().subscribe(function (user) { return _this.user = user; });
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.updated.subscribe(function () {
            _this.userService.getUser().subscribe(function (user) { return _this.user = user; });
        });
        this.userService.authorized.subscribe(function () {
            _this.onAuthorized();
        });
        this.merchandiseService.counted.subscribe(function () {
            _this.merchandiseService.getBasketItems().subscribe(function (merchandises) { return _this.merchandise_count = merchandises.length; });
        });
    };
    AppComponent.prototype.logout = function () {
        sessionStorage.removeItem('access_token');
        this.userService.authorizedToggle();
    };
    AppComponent = __decorate([
        Component({
            selector: 'app',
            templateUrl: './app.component.html',
            styleUrls: ['app.component.css']
        }),
        __metadata("design:paramtypes", [UserService, MerchandiseService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map