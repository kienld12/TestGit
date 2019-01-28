import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService, LoginService } from '../shared/index';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MyDialogSpeComponent } from '../my-dialog-spe/my-dialog-spe.component';
var UserListComponent = /** @class */ (function () {
    function UserListComponent(userService, router, loginService, dialog) {
        this.userService = userService;
        this.router = router;
        this.loginService = loginService;
        this.dialog = dialog;
        this.showUserList = true;
        this.user_detail = "";
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.loginService.getInSession('login')) {
            this.userService.getAllUsers().subscribe(function (users) {
                if (users && users.length > 0) {
                    console.log("User list:" + users);
                    _this.userList = users;
                    console.log("User list client:" + _this.userList);
                    _this.loginService.savaInSession('userList', _this.userList);
                }
            });
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    UserListComponent.prototype.deleteUser = function (username) {
        var _this = this;
        var dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            username: username
        };
        var dialogRef = this.dialog.open(MyDialogSpeComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(function (isDelete) {
            if (isDelete) {
                _this.userService.deleteUser(username).subscribe(function (check) {
                    if (check) {
                        _this.userService.getAllUsers().subscribe(function (userList) {
                            _this.userList = userList;
                        });
                    }
                });
            }
        });
    };
    UserListComponent.prototype.updateUser = function (username) {
        this.router.navigate(['/update-user', { username: username }]);
    };
    UserListComponent.prototype.createUser = function (username) {
        this.showUserList = false;
        this.user_detail = username;
    };
    UserListComponent.prototype.logout = function (value) {
        this.loginService.removeInSession('login');
        this.loginService.removeInSession('username');
        this.loginService.removeInSession('userList');
        this.router.navigate(['/login']);
    };
    UserListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-user-list',
            templateUrl: './user-list.component.html',
            styleUrls: ['./user-list.component.css',
            ],
        }),
        tslib_1.__metadata("design:paramtypes", [UserService, Router, LoginService, MatDialog])
    ], UserListComponent);
    return UserListComponent;
}());
export { UserListComponent };
//# sourceMappingURL=user-list.component.js.map