import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { LoginMobileComponent } from './login/login.component.mobile';
import { ApplicationStateService } from './shared/application-state.service';
import { LoginDesktopComponent } from './login/login.component.desktop';
import { UserCreateDesktopComponent } from './user-create/desktop/user-create.desktop.component';
import { UserCreateMobileComponent } from './user-create/mobile/user-create.mobile.component';
var routes = [{
        path: '', redirectTo: 'login', pathMatch: 'full'
    }, {
        path: "login", component: LoginDesktopComponent
    }, {
        path: 'user-list-manager', component: UserListComponent
    },
    {
        path: 'create-user', component: UserCreateDesktopComponent
    },
    {
        path: 'update-user', component: UserUpdateComponent
    }
];
var routes_mobile = [{
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: "login", component: LoginMobileComponent
    },
    {
        path: 'create-user', component: UserCreateMobileComponent
    }, {}
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule(state, router) {
        this.state = state;
        this.router = router;
        if (this.state.getIsMobileResolution()) {
            this.router.resetConfig(routes_mobile);
        }
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule],
            providers: [ApplicationStateService],
            entryComponents: [LoginMobileComponent, LoginDesktopComponent, UserCreateMobileComponent]
        }),
        tslib_1.__metadata("design:paramtypes", [ApplicationStateService, Router])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map