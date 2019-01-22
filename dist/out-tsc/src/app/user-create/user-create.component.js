import { Validators } from '@angular/forms';
var UserCreateComponent = /** @class */ (function () {
    function UserCreateComponent(formBuilder, userService, router, route, loginService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.loginService = loginService;
        this.matcher = new MyErrorStateMatcher();
        this.isCreateUser = false;
        this.isError = false;
    }
    UserCreateComponent.prototype.ngOnInit = function () {
        this.formCreateUser = this.formBuilder.group({
            'username': ['', [Validators.required, Validators.pattern('^([a-zA-z0-9.])*$')], this.misMatchUsername.bind(this)],
            'password': ['', [Validators.required, Validators.pattern('^([a-zA-Z0-9])*$')]],
            'phone': ['', Validators.pattern('^([0-9]{3}[-][0-9]{3}[-][0-9]{4})$')],
            'address': [''],
            'confirmPassword': ['']
        }, { validator: this.misMatchPassword('password', 'confirmPassword') });
        this.onChanges();
    };
    UserCreateComponent.prototype.onChanges = function () {
        var _this = this;
        this.formCreateUser.valueChanges.subscribe(function (val) {
            _this.isError = false;
        });
    };
    UserCreateComponent.prototype.submitCreateUser = function (value) {
        var _this = this;
        if (this.formCreateUser.valid) {
            var user_1 = { username: value['username'], password: value['password'], address: value['address'], phone: value['phone'] };
            console.log(user_1);
            this.userService.createUser(user_1).subscribe(function (check) {
                console.log(check);
                if (check) {
                    console.log("create user " + check);
                    _this.loginService.savaInSession('login', true);
                    _this.isCreateUser = true;
                    _this.user = user_1;
                }
                else {
                    _this.isError = true;
                }
            }, function (err) {
                console.log("cant not create user " + err);
            });
        }
    };
    UserCreateComponent.prototype.logout = function (value) {
        if (value == true) {
            this.router.navigate(['/login']);
        }
    };
    UserCreateComponent.prototype.misMatchPassword = function (password, confirmPassword) {
        return function (formCreateUser) {
            var pas1 = formCreateUser.get(password).value;
            var pas2 = formCreateUser.get(confirmPassword).value;
            console.log("Compare pass" + pas1 + pas2);
            return pas1 !== pas2 ? { misMatchPassword: true } : null;
        };
    };
    // checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    //     let pass = group.get('password').value;
    //     let confirmPass = group.get('confirmPassword').value;
    //     return pass === confirmPass ? null : { misMatchPassword: true }
    // }
    // function  is used for text matching vadidation
    // matchingUsername(username: string) {
    //     return (formCreateUser: FormGroup): { [key: string]: boolean } => {
    //         console.log(formCreateUser.controls[username].value);
    //         var usernameValue = formCreateUser.controls[username].value;
    //         var usernameJson = { 'username': usernameValue }
    //         console.log(usernameJson);
    //         this.userService.getAllUsers(usernameJson).subscribe(check => {
    //             console.log("Users" + check);
    //             if (check) return { 'misMatch': true };
    //             else return { misMatch: false };
    //         })
    //         console.log("run first");
    //         return { misMatch: false };;
    //     };
    // }
    //     // function  is used for text matching vadidation
    // matching(input: FormControl, userService: UserService) : { [key: string]: boolean } | null {
    //         var usernameValue = input.value;
    //         var usernameJson = { 'username': usernameValue }
    //         console.log(usernameJson);
    // userService.getAllUsers(usernameJson).subscribe(check => {
    //     console.log("Users" + check);
    //     if (check) return { misMatch: true };
    //     else return { misMatch: false };
    // })
    //         return { misMatch: false };
    //     }
    // get username() {
    //     return this.formCreateUser.get('username');
    // }
    // getAllError() {
    //     Object.keys(this.formCreateUser.controls).forEach(key => {
    //         let controlError: ValidationErrors = this.formCreateUser.get(key).errors;
    //         console.log(controlError);
    //         if (controlError != null) {
    //             Object.keys(controlError).forEach(keyError => {
    //                 console.log('Key: ' + key + " KeyError: " + keyError + " ErrorValue: " + controlError[keyError]);
    //             });
    //         }
    //     });
    // }
    UserCreateComponent.prototype.misMatchUsername = function (control) {
        var _this = this;
        var myPromise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                // resolve({'misMatch':true});
                var usernameJson = { 'username': control.value };
                _this.userService.isCheckExistUsername(usernameJson).subscribe(function (check) {
                    if (check) {
                        resolve({ 'misMatch': true });
                    }
                    else {
                        resolve(null);
                    }
                });
            }, 1000);
        });
        return myPromise;
    };
    return UserCreateComponent;
}());
export { UserCreateComponent };
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var invalidCtrl = !!(control && control.invalid && control.parent.dirty);
        var invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
        return (invalidCtrl || invalidParent);
    };
    return MyErrorStateMatcher;
}());
export { MyErrorStateMatcher };
// function misMatchUsername(userService: UserService) {
//     return (control: AbstractControl): ValidationErrors => {
//         //     var usernameValue = control.value;
//         //     var usernameJson = { 'username': usernameValue }
//         //     const myPromise = misMatch(userService, usernameJson);
//         //     myPromise.then(function(check){
//         //         return {misMatch: this.check};
//         //     }).catch(callback);
//         console.log(control.value);
//         if (control.value != null) {
//             var usernameValue = control.value;
//             var usernameJson = { 'username': usernameValue }
//             console.log(usernameJson);
//             // return { misMatch: true};
//             const check = userService.getAllUsers(usernameJson);
//             return ({ misMatch: check });
//             // myPromise.then(function(check) {
//             //     if (check) {
//             //         console.log("fuck you");
//             //         return({misMatch: check})
//             //     } else {
//             //         return null;
//             //     }
//             // })
//         } else {
//             console.log("run first")
//             return null;
//         }
//     };
// }
// function misMatch(userService: UserService) {
//     return (control: AbstractControl): Promise<ValidationErrors> => {
//         var usernameValue = control.value;
//         var usernameJson = { 'username': usernameValue }
//         return new Promise(function (resolve, reject) {
//             // return resolve({'misMatch': true});
//             userService.getAllUsers(usernameJson).subscribe(check => {
//                 if (check) {
//                     console.log("username same :" + check);
//                     return resolve({ misMatch: true });
//                 }
//                 else return resolve(null);
//             })
//         });
//     }
// }
// function xxx(userService: UserService, usernameJson: any) {
//     // return resolve({'misMatch': true});
//     const check = false;
//     userService.getAllUsers(usernameJson).subscribe(check => {
//         if (check) {
//             check = true;
//             return (check);
//         }
//         else return (null);
//     })
// }
// function callback() {
//     console.log("Error");
// }
//# sourceMappingURL=user-create.component.js.map