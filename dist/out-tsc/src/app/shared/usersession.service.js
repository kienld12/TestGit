import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Cookie } from './Cookie';
var UserSessionService = /** @class */ (function () {
    function UserSessionService(cookieService) {
        this.cookieService = cookieService;
        this.loginInfor = {
            ticket: null,
            user: null
        };
        this.subcodeInfo = {
            user: null,
            activeTokens: null,
            token: null,
            subcode: null
        };
        this.EXPIRATION_DAYS = 2;
        this.ROLE = {
            USER: 0x00,
            ADMIN: 0x01,
            SUBCODE: 0x02
        };
    }
    UserSessionService.prototype.initLoginInfo = function () {
        this.loginInfor = {
            ticket: null,
            user: null,
        };
    };
    UserSessionService.prototype.initSubcodeInfo = function () {
        this.subcodeInfo = {
            user: null,
            activeTokens: null,
            token: null,
            subcode: null
        };
    };
    /**
     Login Information
     */
    UserSessionService.prototype.isLoggedIn = function () {
        var session = this.cookieService.getValueSession();
        if (session) {
            this.loginInfor.ticket = session.ticket;
            this.loginInfor.user = session.user.general;
            return true;
        }
        return false;
    };
    UserSessionService.prototype.setLoginInfo = function (login, stay) {
        this.loginInfor.ticket = login.ticket;
        this.loginInfor.user = login.user.general;
        this.cookieService.setValueSession(login, stay);
    };
    UserSessionService.prototype.getLoginUserFullname = function () {
        var sn = this.loginInfor.user.sn;
        var gn = this.loginInfor.user.givenName;
        var name = this.getLoginUSername();
        if (sn | gn) {
            name = sn + ' ' + gn;
        }
        return name;
    };
    UserSessionService.prototype.getLoginUSername = function () {
        return this.loginInfor.user.account;
    };
    UserSessionService.prototype.getTicket = function () {
        if (this.loginInfor.ticket === null) {
            return;
        }
        return this.loginInfor.ticket.code;
    };
    UserSessionService.prototype.isAdmin = function () {
        var admin = false;
        if (this.loginInfor.user.role & this.ROLE.ADMIN) {
            admin = true;
        }
        else if (this.loginInfor.user.role & this.ROLE.SUBCODE) {
            admin = true;
        }
        return admin;
    };
    UserSessionService.prototype.clearLoginInfo = function () {
        this.initLoginInfo();
        this.cookieService.deleteValueSession();
    };
    /*
     Subcode Information
     */
    UserSessionService.prototype.setSubcodeUSer = function (user) {
        this.subcodeInfo.user = user;
    };
    UserSessionService.prototype.setSubcodeActiveTokens = function (tokens) {
        this.subcodeInfo.activeTokens = tokens;
    };
    UserSessionService.prototype.setSubcodeToken = function (token) {
        this.subcodeInfo.token = token;
    };
    UserSessionService.prototype.setSubcodeCode = function (code) {
        this.subcodeInfo.subcode = code;
    };
    UserSessionService.prototype.getSubcodeInfo = function () {
        return this.subcodeInfo;
    };
    UserSessionService.prototype.clearSubcodeInfo = function () {
        this.initSubcodeInfo();
    };
    UserSessionService.prototype.clearAll = function () {
        this.initLoginInfo();
        this.initSubcodeInfo();
    };
    UserSessionService.prototype.getPagesize = function (name) {
        return this.cookieService.getValuePagesize(name);
    };
    UserSessionService.prototype.setPagesize = function (name, size) {
        this.cookieService.setValuePagesize(name, size);
    };
    UserSessionService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Cookie])
    ], UserSessionService);
    return UserSessionService;
}());
export { UserSessionService };
//# sourceMappingURL=usersession.service.js.map