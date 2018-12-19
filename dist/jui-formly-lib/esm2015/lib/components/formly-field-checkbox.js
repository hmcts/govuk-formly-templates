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
      <div class="govuk-form-group">
        <fieldset class="govuk-fieldset">
          <legend class="govuk-fieldset__legend govuk-fieldset__legend--xl">
            <h1 class="govuk-fieldset__heading">
              {{to.label}}
            </h1>
          </legend>
          <span id="to.id" class="govuk-hint">
            {{to.description}}
          </span>
          <div class="govuk-checkboxes">
            <div class="govuk-checkboxes__item" *ngFor="let option of to.options">
              <input class="govuk-checkboxes__input" type="checkbox" [formControl]="formControl" [formlyAttributes]="field">
              <label class="govuk-label govuk-checkboxes__label" [for]="id">
                {{ option.label }}
                <span *ngIf="to.required === true">*</span>
              </label>
            </div>
          </div>
        </fieldset>
      </div>`
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWx5LWZpZWxkLWNoZWNrYm94LmpzIiwic291cmNlUm9vdCI6Im5nOi8vanVpLWZvcm1seS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mb3JtbHktZmllbGQtY2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBMkI3QyxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsU0FBUzs7O1lBekJqRCxTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7YUFxQkQ7YUFDWiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZm9ybWx5LWZpZWxkLWNoZWNrYm94JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBjbGFzcz1cImdvdnVrLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGZpZWxkc2V0IGNsYXNzPVwiZ292dWstZmllbGRzZXRcIj5cbiAgICAgICAgICA8bGVnZW5kIGNsYXNzPVwiZ292dWstZmllbGRzZXRfX2xlZ2VuZCBnb3Z1ay1maWVsZHNldF9fbGVnZW5kLS14bFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzPVwiZ292dWstZmllbGRzZXRfX2hlYWRpbmdcIj5cbiAgICAgICAgICAgICAge3t0by5sYWJlbH19XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDwvbGVnZW5kPlxuICAgICAgICAgIDxzcGFuIGlkPVwidG8uaWRcIiBjbGFzcz1cImdvdnVrLWhpbnRcIj5cbiAgICAgICAgICAgIHt7dG8uZGVzY3JpcHRpb259fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ292dWstY2hlY2tib3hlc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdvdnVrLWNoZWNrYm94ZXNfX2l0ZW1cIiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHRvLm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZ292dWstY2hlY2tib3hlc19faW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIiBbZm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJnb3Z1ay1sYWJlbCBnb3Z1ay1jaGVja2JveGVzX19sYWJlbFwiIFtmb3JdPVwiaWRcIj5cbiAgICAgICAgICAgICAgICB7eyBvcHRpb24ubGFiZWwgfX1cbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRvLnJlcXVpcmVkID09PSB0cnVlXCI+Kjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgPC9kaXY+YCxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWx5RmllbGRDaGVja2JveCBleHRlbmRzIEZpZWxkVHlwZSB7fVxuIl19