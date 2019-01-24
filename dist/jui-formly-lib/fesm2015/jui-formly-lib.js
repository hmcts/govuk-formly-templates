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
        <div class="govuk-form-group">
            <label class="govuk-label" for="for">
                {{to.label}}
                <span *ngIf="to.required === true">&#42;</span>
            </label>
            <input class="govuk-input" id="to.id" name="to.name" type="input" [formControl]="formControl" [formlyAttributes]="field">
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
        <div class="govuk-form-group">
            <label class="govuk-label" for="for">
                {{to.label}}
                <span *ngIf="to.required === true">&#42;</span>
            </label>
            <select class="govuk-select" id="to.id" name="to.name" [formControl]="formControl" [formlyAttributes]="field">
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
      <div class="govuk-form-group">
        <fieldset class="govuk-fieldset">
          <legend class="govuk-fieldset__legend govuk-fieldset__legend--xl">
            <h1 class="govuk-fieldset__heading">
              {{to.label}}
              <span *ngIf="to.required === true">&#42;</span>
            </h1>
          </legend>
          <span id="to.id" class="govuk-hint">
            {{to.description}}
          </span>
          <div class="govuk-checkboxes">
            <div class="govuk-checkboxes__item" *ngFor="let option of to.options">
              <input class="govuk-checkboxes__input"
                     id="option.id"
                     name="option.label"
                     type="checkbox"
                     [formControl]="formControl"
                     [formlyAttributes]="field"
                     [value]="option.value">
              <label class="govuk-label govuk-checkboxes__label" [for]="option.id">
                {{ option.label }}
              </label>
            </div>
          </div>
        </fieldset>
      </div>`
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormlyFieldRadio extends FieldType {
}
FormlyFieldRadio.decorators = [
    { type: Component, args: [{
                selector: 'formly-field-radio',
                template: `
    <div class="govuk-form-group">
      <fieldset class="govuk-fieldset">
        <legend class="govuk-fieldset__legend govuk-fieldset__legend--xl">
          <h1 class="govuk-fieldset__heading">
            {{to.label}}
            <span *ngIf="to.required === true">&#42;</span>
          </h1>
        </legend>
        <span id="to.id" class="govuk-hint">
          {{to.description}}
        </span>
        <div class="govuk-radios">
          <div class="govuk-radios__item" *ngFor="let option of to.options">
            <input class="govuk-radios__input" 
                   id="option.id" 
                   name="option.label" 
                   type="radio" 
                   [formControl]="formControl"
                   [formlyAttributes]="field" 
                   [value]="option.value">
            <label class="govuk-label govuk-radios__label" for="option.id">
              {{option.label}}
            </label>
          </div>
        </div>
      </fieldset>
    </div>`
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormlyFieldTextarea extends FieldType {
}
FormlyFieldTextarea.decorators = [
    { type: Component, args: [{
                selector: 'formly-field-textarea',
                template: `
    <div class="govuk-form-group">
      <label class="govuk-label" for="more-detail">
        {{to.label}}
        <span *ngIf="to.required === true">&#42;</span>
      </label>
      <span id="more-detail-hint" class="govuk-hint">
        {{to.description}}
      </span>
      <textarea class="govuk-textarea"
                [cols]="to.cols"
                [rows]="to.rows"
                [formControl]="formControl"
                [formlyAttributes]="field">
      </textarea>
    </div>
  `
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