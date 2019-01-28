import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginMobileComponent } from './login.component.mobile';
import { LoginDesktopComponent } from './login.component.desktop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoginService } from '../shared/login.service';
import { UserService } from '../shared/user.service';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                LoginComponent,
                LoginMobileComponent,
                LoginDesktopComponent
            ],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                BrowserModule,
                MatFormFieldModule,
                MatInputModule,
                MatButtonModule
            ],
            providers: [LoginService, UserService],
            bootstrap: [LoginComponent]
        })
    ], LoginModule);
    return LoginModule;
}());
export { LoginModule };
//# sourceMappingURL=login.module.js.map