import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
// const moment = _moment;
// export const MY_FORMATS = {
//   parse: {
//     dateInput: 'LL',
//   },
//   display: {
//     dateInput: 'YY-MM-DD',
//     // monthYearLabel: 'L',
//     // dateA11yLabel: 'L',
//   //   monthYearA11yLabel: 'YY',
//   },
// };
// export class DateFormat extends MomentDateAdapter {
//     format(date: Moment, displayFormat: string): string {
//        console.log(date);
//       return;
//     }
// }
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    // title = 'my-material-app';
    // date = new FormControl(moment());
    // options = ['Blue', 'Yellow'];
    // displayedColumns = ['position', 'firstName', 'lastName', 'email'];
    // @ViewChild(MatSort) sort: MatSort;
    // dataSource = new MatTableDataSource(ELEMENT_DATA);
    // constructor(private location: Location, private location1: PlatformLocation, private router: Router, private dialog: MatDialog) {
    //   console.log(this.dataSource);
    // }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngDestroy = function () {
    };
    AppComponent.prototype.submitDialog = function () {
        // console.log('submitDialog');
        // let dialogConfig = new MatDialogConfig();
        // dialogConfig.disableClose = false;
        // dialogConfig.autoFocus = false;
        // dialogConfig.data = {
        //   id: 1,
        //   title: "Angular Dialog Material For Beginner "
        // }
        // let dialogRef = this.dialog.open(MyDialogSpeComponent, dialogConfig);
        // dialogRef.afterClosed().subscribe(results => {
        //   console.log(results);
        // })
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        // this.dataSource.sort = this.sort;
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
var ELEMENT_DATA = [
    { position: 1, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com' },
    { position: 2, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.com' },
    { position: 3, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com' },
    { position: 4, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.com' },
    { position: 5, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com' }
];
//# sourceMappingURL=app.component.js.map