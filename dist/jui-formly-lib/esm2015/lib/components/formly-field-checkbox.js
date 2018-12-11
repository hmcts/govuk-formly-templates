/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
export class FormlyFieldCheckbox extends FieldType {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWx5LWZpZWxkLWNoZWNrYm94LmpzIiwic291cmNlUm9vdCI6Im5nOi8vanVpLWZvcm1seS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mb3JtbHktZmllbGQtY2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBYTdDLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxTQUFTOzs7WUFYakQsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRTs7Ozs7OztXQU9IO2FBQ1YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Zvcm1seS1maWVsZC1jaGVja2JveCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZ292dWstY2hlY2tib3hlc19faXRlbVwiIHN0eWxlPVwibWFyZ2luOiAyZXggMFwiPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJnb3Z1ay1jaGVja2JveGVzX19pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiIFtmb3JtbHlBdHRyaWJ1dGVzXT1cImZpZWxkXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImdvdnVrLWxhYmVsIGdvdnVrLWNoZWNrYm94ZXNfX2xhYmVsXCIgW2Zvcl09XCJpZFwiPlxuICAgICAgICAgIHt7IHRvLmxhYmVsIH19XG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCJ0by5yZXF1aXJlZCA9PT0gdHJ1ZVwiPio8L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+YCxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWx5RmllbGRDaGVja2JveCBleHRlbmRzIEZpZWxkVHlwZSB7fVxuIl19