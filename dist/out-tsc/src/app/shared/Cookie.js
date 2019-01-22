import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Base64 } from './Base64';
var Cookie = /** @class */ (function () {
    function Cookie(cookieService) {
        this.cookieService = cookieService;
        this.session = "_mars_session";
        this.lang = "_mars_lang";
        this.pagesize = "_mars_pagesize";
    }
    Cookie.prototype.defaultExpire = function () {
        var d = new Date();
        d.setFullYear(d.getFullYear() + 1);
        return d;
    };
    Cookie.prototype.sessionExpire = function () {
        var d = new Date();
        d.setDate(d.getDate() + 1);
        return d;
    };
    Cookie.prototype.daysToDate = function (days) {
        var d = new Date();
        var e = new Date(d.getTime() + ((24 * 60 * 60 * 1000) * days));
        return e;
    };
    Cookie.prototype.get = function (name) {
        return this.cookieService.get(name);
    };
    Cookie.prototype.set = function (name, value, expire) {
        if (expire === undefined) {
            expire = this.defaultExpire();
        }
        return this.cookieService.set(name, value, expire);
    };
    Cookie.prototype.delete = function (name) {
        this.cookieService.delete(name);
    };
    Cookie.prototype.getValueSession = function () {
        return JSON.parse(Base64.decode(this.get(this.session)));
    };
    Cookie.prototype.setValueSession = function (json, stay) {
        var expire = null;
        if (stay) {
            expire = this.sessionExpire();
        }
        return this.set(this.session, Base64.encode(JSON.stringify(json)), expire);
    };
    Cookie.prototype.deleteValueSession = function () {
        return this.delete(this.session);
    };
    Cookie.prototype.getValueLocal = function () {
        return this.get(this.lang);
    };
    Cookie.prototype.setValueLocal = function (name) {
        return this.set(this.lang, name);
    };
    Cookie.prototype.deleteValueLocal = function () {
        return this.delete(this.lang);
    };
    Cookie.prototype.getJsonPagesize = function (cookie, name, default_value) {
        var params = this.get(cookie);
        var value = default_value;
        if (params != null) {
            var plain = Base64.decode(params);
            var json = JSON.parse(plain);
            if (json[name] !== undefined) {
                value = json[name];
            }
        }
        return parseInt(value, 10);
    };
    Cookie.prototype.setJsonPagesize = function (cookie, name, value) {
        var params = this.get(cookie);
        var json = {};
        if (params) {
            var plain = Base64.decode(params);
            json = JSON.parse(plain);
        }
        json[name] = value;
        var string = JSON.stringify(json);
        var encode = Base64.encode(string);
        return this.set(cookie, encode);
    };
    Cookie.prototype.getValuePagesize = function (name) {
        return this.getJsonPagesize(this.pagesize, name, 25);
    };
    Cookie.prototype.setValuePagesize = function (name, value) {
        return this.setJsonPagesize(this.pagesize, name, value);
    };
    Cookie.prototype.deleteValuePagesize = function () {
        return this.delete(this.pagesize);
    };
    Cookie = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [CookieService])
    ], Cookie);
    return Cookie;
}());
export { Cookie };
//# sourceMappingURL=Cookie.js.map