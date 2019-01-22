import * as tslib_1 from "tslib";
import { Injectable, Injector, } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserSessionService } from './usersession.service';
var HttpErrorInterceptor = /** @class */ (function () {
    function HttpErrorInterceptor(router, inject, userSessionService) {
        this.router = router;
        this.inject = inject;
        this.userSessionService = userSessionService;
    }
    HttpErrorInterceptor.prototype.intercept = function (request, next) {
        var ticket = this.userSessionService.getTicket();
        var headers = new HttpHeaders();
        headers = headers.set('Contentdfsfds', 'applifdssfdssdf');
        // request = request.clone({
        // 	headers: request.headers.set('Content-Type', 'application/json; charset=utf-8')
        // })
        if (ticket !== '') {
            request = request.clone({
                headers: request.headers.set('x - mars - ticket', ticket)
            });
        }
        return next.handle(request).pipe(catchError(function (httpErrorResponse) {
            var message;
            switch (httpErrorResponse.status) {
                case 400: {
                    message = { code: 400, message: "URLに含まれるパラメータの指定が不正|パラメータ指定が定義されていないコマンド(ユーザー認証等)でパラメータ指定をした" };
                    break;
                }
                case 404: {
                    message = { code: 404, message: "定義されていないコマンド(URL)にリクエストを送信した" };
                    break;
                }
                case 405: {
                    message = { code: 405, message: "各コマンドが対応している以外のメソッドをコールした" };
                    break;
                }
                case 403: {
                    message = { code: httpErrorResponse.error.code, message: httpErrorResponse.error.msg };
                    console.log(message);
                    break;
                }
            }
            return throwError(message);
        }));
    };
    HttpErrorInterceptor = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Router, Injector, UserSessionService])
    ], HttpErrorInterceptor);
    return HttpErrorInterceptor;
}());
export { HttpErrorInterceptor };
//# sourceMappingURL=HttpErrorInterceptor.js.map