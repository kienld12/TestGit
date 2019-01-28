import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../shared/index';
var ShowUserComponent = /** @class */ (function () {
    function ShowUserComponent() {
        this.userlist = [];
        this.logout = new EventEmitter();
    }
    ShowUserComponent.prototype.ngOnInit = function () {
        console.log(this.userInfor['username']);
        var password = "";
        for (var i = 0; i < this.userInfor['password'].length; i++) {
            password += "*";
        }
        this.userInfor['password'] = password;
        this.userlist.push(this.userInfor);
        console.log(this.userlist);
    };
    ShowUserComponent.prototype.logouted = function () {
        console.log('action child');
        this.logout.emit(true);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", IUser)
    ], ShowUserComponent.prototype, "userInfor", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], ShowUserComponent.prototype, "logout", void 0);
    ShowUserComponent = tslib_1.__decorate([
        Component({
            selector: 'child-user',
            template: "\n    <div *ngIf=\"userInfor\">\n\n  <mat-table [dataSource]=\"userlist\">\n  <ng-container matColumnDef=\"username\">\n  <mat-header-cell *matHeaderCellDef>Username</mat-header-cell>\n  <mat-cell *matCellDef=\"let element\">{{element.username}}</mat-cell>\n</ng-container>\n<ng-container matColumnDef=\"password\">\n  <mat-header-cell *matHeaderCellDef>Address</mat-header-cell >\n  <mat-cell mat-cell *matCellDef=\"let element\">{{ element.password }}</mat-cell>\n</ng-container>\n<ng-container matColumnDef=\"address\">\n  <mat-header-cell *matHeaderCellDef>Address</mat-header-cell >\n  <mat-cell mat-cell *matCellDef=\"let element\">{{ element.address }}</mat-cell>\n</ng-container>\n<ng-container matColumnDef=\"phone\">\n  <mat-header-cell *matHeaderCellDef>Phone</mat-header-cell >\n  <mat-cell mat-cell *matCellDef=\"let element\">{{ element.phone }}</mat-cell>\n</ng-container>\n<mat-header-row *matHeaderRowDef=\"['username', 'password', 'address','phone']\"></mat-header-row>\n<mat-row *matRowDef=\"let row: columns: ['username', 'password', 'address','phone']\"></mat-row>\n\n\n    // <thead>\n    //   <tr>\n    //     <th scope=\"col\">Username</th>\n    //     <th scope=\"col\">Password</th>\n    //     <th scope=\"col\">Address</th>\n    //     <th scope=\"col\">Phone</th>\n    //   </tr>\n    // </thead>\n    // <tbody>\n    //   <tr>\n    //     <th scope=\"row\">{{userInfor['username']}}</th>\n    //     <td>{{userInfor['password']}}</td>\n    //     <td>{{userInfor['address']}}</td>\n    //     <td>{{userInfor['phone']}}</td>\n    //   </tr>\n    // </tbody>\n  </mat-table>\n  </div>\n    <button (click)=\"logouted()\" mat-raised-button >Logout</button>",
        })
    ], ShowUserComponent);
    return ShowUserComponent;
}());
export { ShowUserComponent };
//# sourceMappingURL=show-user.component.js.map