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
import { UserService } from './user.service';
import { User } from './user';
var UserComponent = /** @class */ (function () {
    function UserComponent(userService) {
        this.userService = userService;
        this.user = new User();
        this.updatable = "readonly";
        this.editorIsHidden = "hidden";
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    UserComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getUser().subscribe(function (user) { return _this.user = user; });
    };
    UserComponent.prototype.getEditor = function () {
        this.userClone = this.user;
        this.isHidden = "hidden";
        this.editorIsHidden = "";
        this.updatable = "";
    };
    UserComponent.prototype.cancel = function () {
        this.user = this.userClone;
        this.isHidden = "";
        this.editorIsHidden = "hidden";
        this.updatable = "readonly";
    };
    UserComponent.prototype.updateUser = function () {
        var _this = this;
        this.userService.updateUser(this.user).subscribe(function () {
            _this.userService.updatedToggle();
        });
        this.isHidden = "";
        this.editorIsHidden = "hidden";
        this.updatable = "readonly";
    };
    UserComponent.prototype.logout = function () {
        sessionStorage.removeItem('access_token');
        this.userService.authorizedToggle();
    };
    UserComponent = __decorate([
        Component({
            selector: 'user',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.css']
        }),
        __metadata("design:paramtypes", [UserService])
    ], UserComponent);
    return UserComponent;
}());
export { UserComponent };
//# sourceMappingURL=user.component.js.map