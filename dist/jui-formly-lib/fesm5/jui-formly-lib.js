import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { __extends } from 'tslib';
import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var JuiFormlyLibService = /** @class */ (function () {
    function JuiFormlyLibService() {
    }
    JuiFormlyLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    JuiFormlyLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ JuiFormlyLibService.ngInjectableDef = defineInjectable({ factory: function JuiFormlyLibService_Factory() { return new JuiFormlyLibService(); }, token: JuiFormlyLibService, providedIn: "root" });
    return JuiFormlyLibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var JuiFormlyLibComponent = /** @class */ (function () {
    function JuiFormlyLibComponent() {
    }
    /**
     * @return {?}
     */
    JuiFormlyLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    JuiFormlyLibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'enl-jui-formly-lib',
                    template: "\n    <p>\n      jui-formly-lib works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    JuiFormlyLibComponent.ctorParameters = function () { return []; };
    return JuiFormlyLibComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormlyFieldInput = /** @class */ (function (_super) {
    __extends(FormlyFieldInput, _super);
    function FormlyFieldInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormlyFieldInput.decorators = [
        { type: Component, args: [{
                    selector: 'formly-field-input',
                    template: "\n        <div class=\"govuk-form-group\" style=\"margin: 2ex 0\">\n            <label class=\"govuk-label\" for=\"sort\">\n                {{to.label}}\n                <span *ngIf=\"to.required === true\">*</span>\n            </label>\n            <input class=\"govuk-input\" type=\"input\" [formControl]=\"formControl\" [formlyAttributes]=\"field\">\n        </div>"
                }] }
    ];
    return FormlyFieldInput;
}(FieldType));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormlyFieldSelect = /** @class */ (function (_super) {
    __extends(FormlyFieldSelect, _super);
    function FormlyFieldSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormlyFieldSelect.decorators = [
        { type: Component, args: [{
                    selector: 'formly-field-select',
                    template: "\n        <div class=\"govuk-form-group\" style=\"margin: 2ex 0\">\n            <label class=\"govuk-label\" for=\"sort\">\n                {{to.label}}\n                <span *ngIf=\"to.required === true\">*</span>\n            </label>\n            <select class=\"govuk-select\" id=\"sort\" name=\"sort\" [formControl]=\"formControl\" [formlyAttributes]=\"field\">\n                <option *ngIf=\"to.placeholder\" [ngValue]=\"null\">{{ to.placeholder }}</option>\n                <ng-container *ngFor=\"let option of to.options\">\n                    <option [ngValue]=\"option.value\" [disabled]=\"option.disabled\">\n                        {{ option.label }}\n                    </option>\n                </ng-container>\n            </select>\n        </div>\n    "
                }] }
    ];
    return FormlyFieldSelect;
}(FieldType));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormlyFieldCheckbox = /** @class */ (function (_super) {
    __extends(FormlyFieldCheckbox, _super);
    function FormlyFieldCheckbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormlyFieldCheckbox.decorators = [
        { type: Component, args: [{
                    selector: 'formly-field-checkbox',
                    template: "\n    <div class=\"govuk-checkboxes__item\" style=\"margin: 2ex 0\">\n        <input class=\"govuk-checkboxes__input\" type=\"checkbox\" [formControl]=\"formControl\" [formlyAttributes]=\"field\">\n        <label class=\"govuk-label govuk-checkboxes__label\" [for]=\"id\">\n          {{ to.label }}\n          <span *ngIf=\"to.required === true\">*</span>\n        </label>\n    </div>"
                }] }
    ];
    return FormlyFieldCheckbox;
}(FieldType));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormlyFieldRadio = /** @class */ (function (_super) {
    __extends(FormlyFieldRadio, _super);
    function FormlyFieldRadio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormlyFieldRadio.decorators = [
        { type: Component, args: [{
                    selector: 'formly-field-radio',
                    template: "\n    <div class=\"govuk-form-group\">\n      <div class=\"govuk-radios\" *ngFor=\"let option of to.options\">\n        <div class=\"govuk-radios__item\">\n          <input class=\"govuk-radios__input\"\n                 type=\"radio\"\n                 [value]=\"option.value\"\n                 [formControl]=\"formControl\"\n                 [formlyAttributes]=\"field\">\n          <label class=\"govuk-label govuk-radios__label\">\n            {{option.label}}\n          </label>\n        </div>\n      </div>\n    </div>"
                }] }
    ];
    return FormlyFieldRadio;
}(FieldType));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormlyFieldTextarea = /** @class */ (function (_super) {
    __extends(FormlyFieldTextarea, _super);
    function FormlyFieldTextarea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormlyFieldTextarea.decorators = [
        { type: Component, args: [{
                    selector: 'formly-field-textarea',
                    template: "\n    <textarea class=\"govuk-textarea\"\n              [cols]=\"to.cols\"\n              [rows]=\"to.rows\"\n              [formControl]=\"formControl\"\n              [formlyAttributes]=\"field\">\n  </textarea>"
                }] }
    ];
    return FormlyFieldTextarea;
}(FieldType));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var JuiFormlyLibModule = /** @class */ (function () {
    function JuiFormlyLibModule() {
    }
    JuiFormlyLibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        JuiFormlyLibComponent,
                        FormlyFieldInput,
                        FormlyFieldSelect,
                        FormlyFieldCheckbox,
                        FormlyFieldRadio,
                        FormlyFieldTextarea
                    ],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FormlyModule.forRoot({
                            types: [
                                { name: 'input', component: FormlyFieldInput },
                                { name: 'select', component: FormlyFieldSelect },
                                { name: 'checkbox', component: FormlyFieldCheckbox },
                                { name: 'radio', component: FormlyFieldRadio },
                                { name: 'textarea', component: FormlyFieldTextarea },
                            ]
                        })
                    ],
                    exports: [
                        JuiFormlyLibComponent,
                        FormlyFieldInput,
                        FormlyFieldSelect,
                        FormlyFieldCheckbox,
                        FormlyFieldRadio,
                        FormlyFieldTextarea
                    ]
                },] }
    ];
    return JuiFormlyLibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { JuiFormlyLibService, JuiFormlyLibComponent, JuiFormlyLibModule, FormlyFieldInput, FormlyFieldSelect, FormlyFieldCheckbox, FormlyFieldRadio as ɵa, FormlyFieldTextarea as ɵb };

//# sourceMappingURL=jui-formly-lib.js.map