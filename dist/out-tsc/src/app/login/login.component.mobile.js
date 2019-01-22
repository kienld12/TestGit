import * as tslib_1 from "tslib";
import { Component, HostListener } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../shared/index';
import { Router } from '@angular/router';
import { UserSessionService } from '../shared/usersession.service';
var LoginMobileComponent = /** @class */ (function () {
    function LoginMobileComponent(formBuilder, service, router, userSessionService) {
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
        this.onResize();
    }
    LoginMobileComponent.prototype.ngOnInit = function () {
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
    LoginMobileComponent.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
        console.log(this.innerWidth);
    };
    LoginMobileComponent.prototype.onChanges = function () {
        var _this = this;
        this.form.valueChanges.subscribe(function (val) {
            _this.isError = false;
        });
    };
    LoginMobileComponent.prototype.submitLogin = function (value) {
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
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LoginMobileComponent.prototype, "onResize", null);
    LoginMobileComponent = tslib_1.__decorate([
        Component({
            selector: 'cm-login-mobile',
            templateUrl: './login.component.mobile.html',
            styleUrls: ['./login.component.css',
            ],
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, LoginService, Router, UserSessionService])
    ], LoginMobileComponent);
    return LoginMobileComponent;
}());
export { LoginMobileComponent };
//# sourceMappingURL=login.component.mobile.js.map