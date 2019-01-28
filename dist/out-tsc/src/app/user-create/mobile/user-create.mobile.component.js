import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService, LoginService } from '../../shared/index';
import { Router, ActivatedRoute } from '@angular/router';
import { UserCreateComponent } from '../user-create.component';
var UserCreateMobileComponent = /** @class */ (function (_super) {
    tslib_1.__extends(UserCreateMobileComponent, _super);
    function UserCreateMobileComponent(formBuilder, userService, router, route, loginService) {
        return _super.call(this, formBuilder, userService, router, route, loginService) || this;
    }
    UserCreateMobileComponent = tslib_1.__decorate([
        Component({
            selector: 'create-user-mobile',
            templateUrl: './user-create.mobile.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, UserService, Router, ActivatedRoute, LoginService])
    ], UserCreateMobileComponent);
    return UserCreateMobileComponent;
}(UserCreateComponent));
export { UserCreateMobileComponent };
//# sourceMappingURL=user-create.mobile.component.js.map