import * as tslib_1 from "tslib";
import { Component, HostListener } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../shared/index';
import { Router } from '@angular/router';
import { UserSessionService } from '../shared/usersession.service';
var LoginDesktopComponent = /** @class */ (function () {
    function LoginDesktopComponent(formBuilder, service, router, userSessionService) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.userSessionService = userSessionService;
        this.username = "";
        this.password = "";
        this.userList = null;
        this.isError = false;
        this.isLogin = false;
        this.isAdmin = false;
        this.innerWidth = window.innerWidth;
    }
    LoginDesktopComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        // this.isLogin = this.service.getInSession('login');
        // this.username = this.service.getInSession('username');
        // this.userList = this.service.getInSession('userList');
        // if (this.isLogin != true) {
        //     this.isLogin = false;
        // } else {
        //     this.router.navigate(['/user-list-manager']);
        // }
        this.onChanges();
    };
    LoginDesktopComponent.prototype.onChanges = function () {
        var _this = this;
        this.form.valueChanges.subscribe(function (val) {
            _this.isError = false;
        });
    };
    LoginDesktopComponent.prototype.submitLogin = function (value) {
        var _this = this;
        if (this.form.valid) {
            console.log(value);
            var user = { username: value['username'], password: value['password'] };
            this.username = value['username'];
            this.password = value['password'];
            this.service.checkLogin(user).subscribe(function (login) {
                console.log(login);
                _this.ticket = login.ticket;
                console.log(JSON.stringify(_this.user));
                console.log(JSON.stringify(_this.ticket));
                _this.userSessionService.setLoginInfo(login, true);
                _this.isAdmin = _this.userSessionService.isAdmin();
                _this.user = _this.userSessionService.getLoginUserFullname();
            }, function (error) {
                _this.error = error;
                _this.isError = true;
                console.log(_this.error);
            });
        }
    };
    tslib_1.__decorate([
        HostListener('window: resize', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Object)
    ], LoginDesktopComponent.prototype, "onChanges", null);
    LoginDesktopComponent = tslib_1.__decorate([
        Component({
            selector: 'cm-login-desktop',
            templateUrl: './login.component.desktop.html',
            styleUrls: ['./login.component.css',
            ],
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, LoginService, Router, UserSessionService])
    ], LoginDesktopComponent);
    return LoginDesktopComponent;
}());
export { LoginDesktopComponent };
//# sourceMappingURL=login.component.desktop.js.map