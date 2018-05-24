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
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './components/user/user';
import { UserService } from './components/user/user.service';
var IntermediateService = /** @class */ (function () {
    function IntermediateService(userService, http) {
        this.userService = userService;
        this.http = http;
        this.userAuthorizedSource = new Subject();
        this.userAuthorized$ = this.userAuthorizedSource.asObservable();
        this.userUrl = 'http://localhost:64384/Account/';
        this.user = new User();
    }
    IntermediateService.prototype.authorizeUser = function () {
        var _this = this;
        this.http.get(this.userUrl + 'GetCurrentUser', { headers: new HttpHeaders({ 'Authorization': "Bearer " + sessionStorage.getItem('access_token') }) }).subscribe(function (data) { return _this.user = data; });
        console.log(this.user);
        this.userAuthorizedSource.next(this.user.name);
    };
    IntermediateService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [UserService, HttpClient])
    ], IntermediateService);
    return IntermediateService;
}());
export { IntermediateService };
//# sourceMappingURL=intermediate.service.js.map