var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
var AuthorizationService = /** @class */ (function () {
    function AuthorizationService(http) {
        this.http = http;
        this.register_url = 'http://localhost:64384/Account/Register';
        this.login_url = 'http://localhost:64384/Account/Login';
    }
    AuthorizationService.prototype.sendRegisterData = function (registerData) {
        return this.http.post(this.register_url, registerData)
            .pipe(catchError(this.handleError));
    };
    AuthorizationService.prototype.sendLogInData = function (loginData) {
        return this.http.post(this.login_url, loginData)
            .pipe(catchError(this.handleError));
    };
    AuthorizationService.prototype.handleError = function (error) {
        return Observable.throw(error.message || "Server error!");
    };
    AuthorizationService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], AuthorizationService);
    return AuthorizationService;
}());
export { AuthorizationService };
//# sourceMappingURL=authorization.service.js.map