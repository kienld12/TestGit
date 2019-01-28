import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StorageServiceModule } from 'angular-webstorage-service';
import { MatAutocompleteModule, MatSelectModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatRadioModule, MatInputModule, MAT_LABEL_GLOBAL_OPTIONS, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatButtonModule, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS, MatTableModule, MatSortModule } from '@angular/material';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
// import { HttpErrorInterceptor } from './shared/HttpErrorInterceptor';
import { LoginModule } from './login/login.module';
import { UserListModule } from './user-list/user-list.module';
import { UserCreateModule } from './user-create/user-create.module';
import { UserUpdateModule } from './user-update/user-update.module';
import { HttpErrorInterceptor } from './shared/index';
import { CookieService } from 'ngx-cookie-service';
import { Cookie } from './shared/Cookie';
import { UserSessionService } from './shared/usersession.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
            ],
            imports: [
                UserUpdateModule,
                UserCreateModule,
                UserListModule,
                StorageServiceModule,
                BrowserModule,
                AppRoutingModule,
                BrowserAnimationsModule,
                MatAutocompleteModule,
                MatSelectModule,
                MatCheckboxModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatFormFieldModule,
                MatRadioModule,
                MatInputModule,
                MatSliderModule,
                MatSlideToggleModule,
                MatMenuModule,
                MatButtonModule,
                MatDialogModule,
                MatTableModule,
                MatSortModule,
                MomentDateModule,
                LoginModule,
                HttpClientModule
            ],
            providers: [{ provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'right' } },
                { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: HttpErrorInterceptor,
                    multi: true
                }, CookieService, Cookie, UserSessionService
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map