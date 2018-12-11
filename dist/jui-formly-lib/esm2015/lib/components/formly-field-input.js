/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
export class FormlyFieldInput extends FieldType {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWx5LWZpZWxkLWlucHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vanVpLWZvcm1seS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mb3JtbHktZmllbGQtaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBYTdDLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxTQUFTOzs7WUFYOUMsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRTs7Ozs7OztlQU9DO2FBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Zvcm1seS1maWVsZC1pbnB1dCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImdvdnVrLWZvcm0tZ3JvdXBcIiBzdHlsZT1cIm1hcmdpbjogMmV4IDBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImdvdnVrLWxhYmVsXCIgZm9yPVwic29ydFwiPlxuICAgICAgICAgICAgICAgIHt7dG8ubGFiZWx9fVxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwidG8ucmVxdWlyZWQgPT09IHRydWVcIj4qPC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImdvdnVrLWlucHV0XCIgdHlwZT1cImlucHV0XCIgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCIgW2Zvcm1seUF0dHJpYnV0ZXNdPVwiZmllbGRcIj5cbiAgICAgICAgPC9kaXY+YCxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWx5RmllbGRJbnB1dCBleHRlbmRzIEZpZWxkVHlwZSB7fVxuIl19