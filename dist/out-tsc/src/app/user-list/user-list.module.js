import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from '../shared/index';
import { UserListComponent } from './user-list.component';
import { MatButtonModule, MatTableModule, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { MyDialogSpeComponent } from '../my-dialog-spe/my-dialog-spe.component';
var UserListModule = /** @class */ (function () {
    function UserListModule() {
    }
    UserListModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                UserListComponent,
                MyDialogSpeComponent
            ],
            imports: [
                MatButtonModule,
                MatTableModule,
                BrowserModule,
                MatDialogModule
            ],
            providers: [UserService, {
                    provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false }
                }],
            bootstrap: [UserListComponent],
            entryComponents: [MyDialogSpeComponent]
        })
    ], UserListModule);
    return UserListModule;
}());
export { UserListModule };
//# sourceMappingURL=user-list.module.js.map