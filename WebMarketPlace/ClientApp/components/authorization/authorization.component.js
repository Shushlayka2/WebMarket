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
import { AuthorizationService } from './authorization.service';
import { MerchandiseService } from '../merchandise/merchandise.service';
import { UserService } from '../user/user.service';
import { Register } from './register';
import { Login } from './login';
var AuthorizationComponent = /** @class */ (function () {
    function AuthorizationComponent(authorizationService, userService, merchandiseService) {
        this.authorizationService = authorizationService;
        this.userService = userService;
        this.merchandiseService = merchandiseService;
        this.register = new Register();
        this.login = new Login();
        this.is_hidden = "hidden";
    }
    AuthorizationComponent.prototype.sendRegisterData = function () {
        var _this = this;
        this.authorizationService.sendRegisterData(this.register)
            .subscribe(function (data) {
            sessionStorage.setItem('access_token', data);
            _this.is_hidden = "hidden";
            _this.userService.authorizedToggle();
            _this.merchandiseService.countedToggle();
        }, function (error) {
            _this.response_error_msg = error;
            _this.is_hidden = "";
        });
    };
    AuthorizationComponent.prototype.sendLogInData = function () {
        var _this = this;
        this.authorizationService.sendLogInData(this.login)
            .subscribe(function (data) {
            sessionStorage.setItem('access_token', data);
            _this.is_hidden = "hidden";
            _this.userService.authorizedToggle();
            _this.merchandiseService.countedToggle();
        }, function (error) {
            _this.response_error_msg = error;
            _this.is_hidden = "";
        });
    };
    AuthorizationComponent = __decorate([
        Component({
            selector: 'authorization',
            templateUrl: 'authorization.component.html',
            styleUrls: ['authorization.component.css'],
            providers: [AuthorizationService]
        }),
        __metadata("design:paramtypes", [AuthorizationService, UserService, MerchandiseService])
    ], AuthorizationComponent);
    return AuthorizationComponent;
}());
export { AuthorizationComponent };
//# sourceMappingURL=authorization.component.js.map