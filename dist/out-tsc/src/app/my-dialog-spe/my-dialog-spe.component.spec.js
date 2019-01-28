import { async, TestBed } from '@angular/core/testing';
import { MyDialogSpeComponent } from './my-dialog-spe.component';
describe('MyDialogSpeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MyDialogSpeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MyDialogSpeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=my-dialog-spe.component.spec.js.map