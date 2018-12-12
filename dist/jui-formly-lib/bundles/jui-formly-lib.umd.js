(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/forms'), require('@angular/core'), require('@ngx-formly/core')) :
    typeof define === 'function' && define.amd ? define('jui-formly-lib', ['exports', '@angular/common', '@angular/forms', '@angular/core', '@ngx-formly/core'], factory) :
    (factory((global['jui-formly-lib'] = {}),global.ng.common,global.ng.forms,global.ng.core,global.core));
}(this, (function (exports,common,forms,i0,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var JuiFormlyLibService = /** @class */ (function () {
        function JuiFormlyLibService() {
        }
        JuiFormlyLibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        JuiFormlyLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ JuiFormlyLibService.ngInjectableDef = i0.defineInjectable({ factory: function JuiFormlyLibService_Factory() { return new JuiFormlyLibService(); }, token: JuiFormlyLibService, providedIn: "root" });
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
            { type: i0.Component, args: [{
                        selector: 'enl-jui-formly-lib',
                        template: "\n    <p>\n      jui-formly-lib works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        JuiFormlyLibComponent.ctorParameters = function () { return []; };
        return JuiFormlyLibComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

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
            { type: i0.Component, args: [{
                        selector: 'formly-field-input',
                        template: "\n        <div class=\"govuk-form-group\" style=\"margin: 2ex 0\">\n            <label class=\"govuk-label\" for=\"sort\">\n                {{to.label}}\n                <span *ngIf=\"to.required === true\">*</span>\n            </label>\n            <input class=\"govuk-input\" type=\"input\" [formControl]=\"formControl\" [formlyAttributes]=\"field\">\n        </div>"
                    }] }
        ];
        return FormlyFieldInput;
    }(core.FieldType));

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
            { type: i0.Component, args: [{
                        selector: 'formly-field-select',
                        template: "\n        <div class=\"govuk-form-group\" style=\"margin: 2ex 0\">\n            <label class=\"govuk-label\" for=\"sort\">\n                {{to.label}}\n                <span *ngIf=\"to.required === true\">*</span>\n            </label>\n            <select class=\"govuk-select\" id=\"sort\" name=\"sort\" [formControl]=\"formControl\" [formlyAttributes]=\"field\">\n                <option *ngIf=\"to.placeholder\" [ngValue]=\"null\">{{ to.placeholder }}</option>\n                <ng-container *ngFor=\"let option of to.options\">\n                    <option [ngValue]=\"option.value\" [disabled]=\"option.disabled\">\n                        {{ option.label }}\n                    </option>\n                </ng-container>\n            </select>\n        </div>\n    "
                    }] }
        ];
        return FormlyFieldSelect;
    }(core.FieldType));

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
            { type: i0.Component, args: [{
                        selector: 'formly-field-checkbox',
                        template: "\n    <div class=\"govuk-checkboxes__item\" style=\"margin: 2ex 0\">\n        <input class=\"govuk-checkboxes__input\" type=\"checkbox\" [formControl]=\"formControl\" [formlyAttributes]=\"field\">\n        <label class=\"govuk-label govuk-checkboxes__label\" [for]=\"id\">\n          {{ to.label }}\n          <span *ngIf=\"to.required === true\">*</span>\n        </label>\n    </div>"
                    }] }
        ];
        return FormlyFieldCheckbox;
    }(core.FieldType));

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
            { type: i0.Component, args: [{
                        selector: 'formly-field-radio',
                        template: "\n    <div class=\"govuk-form-group\">\n      <div class=\"govuk-radios\" *ngFor=\"let option of to.options\">\n        <div class=\"govuk-radios__item\">\n          <input class=\"govuk-radios__input\"\n                 type=\"radio\"\n                 [value]=\"option.value\"\n                 [formControl]=\"formControl\"\n                 [formlyAttributes]=\"field\">\n          <label class=\"govuk-label govuk-radios__label\">\n            {{option.label}}\n          </label>\n        </div>\n      </div>\n    </div>"
                    }] }
        ];
        return FormlyFieldRadio;
    }(core.FieldType));

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
            { type: i0.Component, args: [{
                        selector: 'formly-field-textarea',
                        template: "\n    <textarea class=\"govuk-textarea\"\n              [cols]=\"to.cols\"\n              [rows]=\"to.rows\"\n              [formControl]=\"formControl\"\n              [formlyAttributes]=\"field\">\n  </textarea>"
                    }] }
        ];
        return FormlyFieldTextarea;
    }(core.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var JuiFormlyLibModule = /** @class */ (function () {
        function JuiFormlyLibModule() {
        }
        JuiFormlyLibModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            JuiFormlyLibComponent,
                            FormlyFieldInput,
                            FormlyFieldSelect,
                            FormlyFieldCheckbox,
                            FormlyFieldRadio,
                            FormlyFieldTextarea
                        ],
                        imports: [
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            core.FormlyModule.forRoot({
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

    exports.JuiFormlyLibService = JuiFormlyLibService;
    exports.JuiFormlyLibComponent = JuiFormlyLibComponent;
    exports.JuiFormlyLibModule = JuiFormlyLibModule;
    exports.FormlyFieldInput = FormlyFieldInput;
    exports.FormlyFieldSelect = FormlyFieldSelect;
    exports.FormlyFieldCheckbox = FormlyFieldCheckbox;
    exports.ɵa = FormlyFieldRadio;
    exports.ɵb = FormlyFieldTextarea;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=jui-formly-lib.umd.js.map