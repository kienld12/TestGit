import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
var MyDialogSpeComponent = /** @class */ (function () {
    function MyDialogSpeComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.username = data.username;
    }
    MyDialogSpeComponent.prototype.ngOnInit = function () {
    };
    MyDialogSpeComponent.prototype.save = function () {
        this.dialogRef.close(true);
    };
    MyDialogSpeComponent.prototype.close = function () {
        this.dialogRef.close(false);
    };
    MyDialogSpeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-my-dialog-spe',
            templateUrl: './my-dialog-spe.component.html',
            styleUrls: ['./my-dialog-spe.component.css']
        }),
        tslib_1.__param(0, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [Object, MatDialogRef])
    ], MyDialogSpeComponent);
    return MyDialogSpeComponent;
}());
export { MyDialogSpeComponent };
//# sourceMappingURL=my-dialog-spe.component.js.map