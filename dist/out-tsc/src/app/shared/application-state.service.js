import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var ApplicationStateService = /** @class */ (function () {
    function ApplicationStateService() {
        this.isMobileResolution = window.innerWidth < 750 ? true : false;
    }
    ApplicationStateService.prototype.getIsMobileResolution = function () {
        return this.isMobileResolution;
    };
    ApplicationStateService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], ApplicationStateService);
    return ApplicationStateService;
}());
export { ApplicationStateService };
//# sourceMappingURL=application-state.service.js.map