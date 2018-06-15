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
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.userUrl = 'http://localhost:64384/Account/';
        this.is_authorized = false;
        this.updated = new EventEmitter();
        this.authorized = new EventEmitter();
    }
    UserService.prototype.updatedToggle = function () {
        this.updated.emit();
    };
    UserService.prototype.authorizedToggle = function () {
        this.is_authorized = !this.is_authorized;
        this.authorized.emit();
    };
    UserService.prototype.getUser = function () {
        return this.http.get(this.userUrl + 'GetCurrentUser', { headers: new HttpHeaders({ 'Authorization': "Bearer " + sessionStorage.getItem('access_token') }) });
    };
    UserService.prototype.updateUser = function (user) {
        return this.http.post(this.userUrl + 'UpdateUser', user, { headers: new HttpHeaders({ 'Authorization': "Bearer " + sessionStorage.getItem('access_token') }) });
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], UserService.prototype, "updated", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], UserService.prototype, "authorized", void 0);
    UserService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map