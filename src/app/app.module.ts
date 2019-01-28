import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { StorageServiceModule } from 'angular-webstorage-service';
import {
  MatAutocompleteModule, MatSelectModule, MatCheckboxModule, MatDatepickerModule,
  MatNativeDateModule, MatFormFieldModule, MatRadioModule, MatInputModule, MAT_LABEL_GLOBAL_OPTIONS,
  MatSliderModule, MatSlideToggleModule, MatMenuModule, MatButtonModule, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS,
  MatTableModule, MatSortModule, MAT_DATE_FORMATS, DateAdapter, MAT_DATE_LOCALE
} from '@angular/material';
import { MomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { LoginModule } from './login/login.module';
import { WelcomeComponent } from './welcome/welcome.component'
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
