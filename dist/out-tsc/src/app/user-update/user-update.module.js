import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { UserUpdateComponent } from './user-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from '../shared/index';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
var UserUpdateModule = /** @class */ (function () {
    function UserUpdateModule() {
    }
    UserUpdateModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                UserUpdateComponent
            ],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                BrowserModule,
                MatFormFieldModule,
                MatInputModule,
                MatButtonModule
            ],
            providers: [UserService],
            bootstrap: [UserUpdateComponent]
        })
    ], UserUpdateModule);
    return UserUpdateModule;
}());
export { UserUpdateModule };
//# sourceMappingURL=user-update.module.js.map