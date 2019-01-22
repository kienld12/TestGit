import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/index';
var UserUpdateComponent = /** @class */ (function () {
    function UserUpdateComponent(formBuilder, userService, router, route) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.isCreateUser = false;
        this.userUpdate = { username: '', phone: '', address: '' };
    }
    UserUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngOnInit");
        var name = this.route.snapshot.paramMap.get('username');
        if (name && name.length > 0) {
            this.userService.getUserByUsername({ 'username': name }).subscribe(function (user) {
                if (user.length > 0) {
                    var temp = { username: user[0]['username'], phone: user[0]['phone'], address: user[0]['address'] };
                    console.log(_this.userUpdate);
                    _this.userUpdate = temp;
                    console.log(_this.userUpdate);
                    _this.formCreateUser.get('username').setValue(_this.userUpdate['username']);
                    _this.formCreateUser.get('address').setValue(_this.userUpdate['address']);
                    _this.formCreateUser.get('phone').setValue(_this.userUpdate['phone']);
                }
            });
        }
        this.formCreateUser = this.formBuilder.group({
            'username': [],
            'phone': ['', Validators.pattern('^([0-9]{3}[-][0-9]{3}[-][0-9]{4})$')],
            'address': [''],
        });
    };
    UserUpdateComponent.prototype.submitUpdateUser = function (value) {
        var _this = this;
        if (this.formCreateUser.valid) {
            var user = { username: value['username'], address: value['address'], phone: value['phone'] };
            console.log(user);
            this.userService.updateUser(user).subscribe(function (check) {
                console.log("create user " + check);
                if (check) {
                    _this.router.navigate(['/user-list-manager']);
                }
            });
        }
    };
    UserUpdateComponent = tslib_1.__decorate([
        Component({
            selector: 'app-user-update',
            templateUrl: './user-update.component.html',
            styleUrls: ['./user-update.component.css',
            ],
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, UserService,
            Router, ActivatedRoute])
    ], UserUpdateComponent);
    return UserUpdateComponent;
}());
export { UserUpdateComponent };
//# sourceMappingURL=user-update.component.js.map