import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
        this.url = '/api/create-user';
        this.httpHeader = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'my-auth-token'
        });
        this.options = {
            headers: this.httpHeader
        };
    }
    /**
     *
     * @param user : IUser
     * return true if createUser successful, otherwise false unsuccessful.
     */
    UserService.prototype.createUser = function (user) {
        return this.httpClient.post(this.url, JSON.stringify(user), this.options);
    };
    UserService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
    };
    ;
    /**
     *
     * @param username : username
     * check username if exist
     */
    UserService.prototype.isCheckExistUsername = function (username) {
        console.log("Run service :" + JSON.stringify(username));
        return this.httpClient.post('/api/users', JSON.stringify(username), this.options);
    };
    UserService.prototype.getAllUsers = function () {
        return this.httpClient.get('/api/user-list', this.options);
    };
    UserService.prototype.getUserByUsername = function (username) {
        console.log("Run service :" + JSON.stringify(username));
        return this.httpClient.post('/api/get-user', JSON.stringify(username), this.options);
    };
    UserService.prototype.deleteUser = function (username) {
        var headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Authorization', 'my-auth-token');
        var params = new HttpParams();
        params = params.append('username', username);
        return this.httpClient.delete('/api/delete-user', { headers: headers, params: params });
    };
    UserService.prototype.updateUser = function (user) {
        return this.httpClient.post('/api/update-user', JSON.stringify(user), this.options);
    };
    UserService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map