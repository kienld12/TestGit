import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService, LoginService } from '../../shared/index';
import { Router, ActivatedRoute } from '@angular/router';
import { UserCreateComponent } from '../user-create.component';
var UserCreateDesktopComponent = /** @class */ (function (_super) {
    tslib_1.__extends(UserCreateDesktopComponent, _super);
    function UserCreateDesktopComponent(formBuilder, userService, router, route, loginService) {
        return _super.call(this, formBuilder, userService, router, route, loginService) || this;
    }
    UserCreateDesktopComponent = tslib_1.__decorate([
        Component({
            selector: 'create-user-desktop',
            templateUrl: './user-create.desktop.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, UserService, Router, ActivatedRoute, LoginService])
    ], UserCreateDesktopComponent);
    return UserCreateDesktopComponent;
}(UserCreateComponent));
export { UserCreateDesktopComponent };
//# sourceMappingURL=user-create.desktop.component.js.map