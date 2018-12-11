import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class JuiFormlyLibService {
    constructor() { }
}
JuiFormlyLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
JuiFormlyLibService.ctorParameters = () => [];
/** @nocollapse */ JuiFormlyLibService.ngInjectableDef = defineInjectable({ factory: function JuiFormlyLibService_Factory() { return new JuiFormlyLibService(); }, token: JuiFormlyLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class JuiFormlyLibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
JuiFormlyLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'enl-jui-formly-lib',
                template: `
    <p>
      jui-formly-lib works!
    </p>
  `
            }] }
];
/** @nocollapse */
JuiFormlyLibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormlyFieldInput extends FieldType {
}
FormlyFieldInput.decorators = [
    { type: Component, args: [{
                selector: 'formly-field-input',
                template: `
        <div class="govuk-form-group" style="margin: 2ex 0">
            <label class="govuk-label" for="sort">
                {{to.label}}
                <span *ngIf="to.required === true">*</span>
            </label>
            <input class="govuk-input" type="input" [formControl]="formControl" [formlyAttributes]="field">
        </div>`
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormlyFieldSelect extends FieldType {
}
FormlyFieldSelect.decorators = [
    { type: Component, args: [{
                selector: 'formly-field-select',
                template: `
        <div class="govuk-form-group" style="margin: 2ex 0">
            <label class="govuk-label" for="sort">
                {{to.label}}
                <span *ngIf="to.required === true">*</span>
            </label>
            <select class="govuk-select" id="sort" name="sort" [formControl]="formControl" [formlyAttributes]="field">
                <option *ngIf="to.placeholder" [ngValue]="null">{{ to.placeholder }}</option>
                <ng-container *ngFor="let option of to.options">
                    <option [ngValue]="option.value" [disabled]="option.disabled">
                        {{ option.label }}
                    </option>
                </ng-container>
            </select>
        </div>
    `
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormlyFieldCheckbox extends FieldType {
}
FormlyFieldCheckbox.decorators = [
    { type: Component, args: [{
                selector: 'formly-field-checkbox',
                template: `
    <div class="govuk-checkboxes__item" style="margin: 2ex 0">
        <input class="govuk-checkboxes__input" type="checkbox" [formControl]="formControl" [formlyAttributes]="field">
        <label class="govuk-label govuk-checkboxes__label" [for]="id">
          {{ to.label }}
          <span *ngIf="to.required === true">*</span>
        </label>
    </div>`
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class JuiFormlyLibModule {
}
JuiFormlyLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    JuiFormlyLibComponent,
                    FormlyFieldInput,
                    FormlyFieldSelect,
                    FormlyFieldCheckbox
                ],
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormlyModule.forRoot({
                        types: [
                            { name: 'input', component: FormlyFieldInput },
                            { name: 'select', component: FormlyFieldSelect },
                            { name: 'checkbox', component: FormlyFieldCheckbox },
                        ]
                    })
                ],
                exports: [
                    JuiFormlyLibComponent,
                    FormlyFieldInput,
                    FormlyFieldSelect,
                    FormlyFieldCheckbox
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { JuiFormlyLibService, JuiFormlyLibComponent, JuiFormlyLibModule, FormlyFieldInput, FormlyFieldSelect, FormlyFieldCheckbox };

//# sourceMappingURL=jui-formly-lib.js.map