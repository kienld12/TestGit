
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import {
  MatFormFieldModule, MatInputModule, MAT_LABEL_GLOBAL_OPTIONS,
  MatSlideToggleModule, MatButtonModule, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material';
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule
  ],
  bootstrap: [LoginComponent]
})
export class LoginModule {

}
