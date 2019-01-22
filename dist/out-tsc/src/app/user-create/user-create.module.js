import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from '../shared/index';
import { ShowUserComponent } from './show-user.component';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule } from '@angular/material';
import { UserCreateDesktopComponent } from './desktop/user-create.desktop.component';
import { UserCreateMobileComponent } from './mobile/user-create.mobile.component';
var UserCreateModule = /** @class */ (function () {
    function UserCreateModule() {
    }
    UserCreateModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                UserCreateDesktopComponent,
                ShowUserComponent,
                UserCreateMobileComponent
            ],
            imports: [
                MatTableModule,
                FormsModule,
                ReactiveFormsModule,
                BrowserModule,
                MatFormFieldModule,
                MatInputModule,
                MatButtonModule
            ],
            providers: [UserService],
            bootstrap: [UserCreateDesktopComponent]
        })
    ], UserCreateModule);
    return UserCreateModule;
}());
export { UserCreateModule };
//# sourceMappingURL=user-create.module.js.map