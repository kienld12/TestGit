import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
var LoginService = /** @class */ (function () {
    function LoginService(httpClient, storage) {
        this.httpClient = httpClient;
        this.storage = storage;
        this.url = '/api/login';
        this.httpHeader = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'my-auth-token'
        });
        this.option = {
            headers: this.httpHeader
        };
    }
    /**
     *
     * @param user : IUser
     * return true if login successful, otherwise false unsuccessful.
     */
    LoginService.prototype.checkLogin = function (user) {
        var data = {
            type: "plain",
            id: user['username'],
            pass: user['password']
        };
        console.log(JSON.stringify(data));
        return this.httpClient.post(this.url, JSON.stringify(user), this.option);
    };
    /**
     *
     * @param key : key
     * @param val : value
     * store in storage service
     */
    LoginService.prototype.savaInSession = function (key, val) {
        console.log('recieved: key ' + key + " value: " + val);
        this.storage.set(key, val);
        console.log(this.storage.get(key));
    };
    /**
     *
     * @param key : key
     * return object from key
     */
    LoginService.prototype.getInSession = function (key) {
        console.log("getInSession");
        var temp = this.storage.get(key);
        console.log((temp));
        if (temp === 'undefined') {
            return false;
        }
        else {
            return temp;
        }
    };
    /**
     *
     * @param key : key
     * remove object from key in store service
     */
    LoginService.prototype.removeInSession = function (key) {
        return this.storage.remove(key);
    };
    LoginService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(1, Inject(LOCAL_STORAGE)),
        tslib_1.__metadata("design:paramtypes", [HttpClient, WebStorageService])
    ], LoginService);
    return LoginService;
}());
export { LoginService };
//# sourceMappingURL=login.service.js.map