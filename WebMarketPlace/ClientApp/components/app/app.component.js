var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, } from '@angular/core';
//import { Subscription } from 'rxjs';
import { UserService } from '../user/user.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(userService) {
        this.userService = userService;
    }
    //TODO: Change it to service interaction
    AppComponent.prototype.onAuthorized = function () {
        var _this = this;
        this.is_authorized = true;
        this.userService.getUser().subscribe(function (user) { return _this.user = user; });
    };
    AppComponent = __decorate([
        Component({
            selector: 'app',
            templateUrl: './app.component.html',
            styleUrls: ['app.component.css']
        }),
        __metadata("design:paramtypes", [UserService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map