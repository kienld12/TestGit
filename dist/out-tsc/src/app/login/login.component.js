import * as tslib_1 from "tslib";
import { Component, HostListener } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../shared/index';
import { Router } from '@angular/router';
import { UserSessionService } from '../shared/usersession.service';
import { ApplicationStateService } from '../shared/application-state.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, service, router, userSessionService, state) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.userSessionService = userSessionService;
        this.state = state;
        this.isMobileResolution = false;
        this.username = "";
        this.password = "";
        this.userList = null;
        this.isError = false;
        this.isLogin = false;
        this.isAdmin = false;
        this.isMobileResolution = state.getIsMobileResolution();
        this.innerWidth = window.innerWidth;
        this.onResize();
    }
    LoginComponent.prototype.ngOnInit = function () {
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
    LoginComponent.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
        console.log(this.innerWidth);
        this.isMobileResolution = window.innerWidth < 750 ? true : false;
    };
    LoginComponent.prototype.onChanges = function () {
        var _this = this;
        this.form.valueChanges.subscribe(function (val) {
            _this.isError = false;
        });
    };
    LoginComponent.prototype.submitLogin = function (value) {
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
    ], LoginComponent.prototype, "onResize", null);
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'cm-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css',
            ],
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, LoginService, Router, UserSessionService, ApplicationStateService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map