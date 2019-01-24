/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
export class FormlyFieldRadio extends FieldType {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWx5LWZpZWxkLXJhZGlvLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanVpLWZvcm1seS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mb3JtbHktZmllbGQtcmFkaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBaUM3QyxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsU0FBUzs7O1lBL0I5QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7V0EyQkQ7YUFDViIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm1seS1maWVsZC1yYWRpbycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImdvdnVrLWZvcm0tZ3JvdXBcIj5cbiAgICAgIDxmaWVsZHNldCBjbGFzcz1cImdvdnVrLWZpZWxkc2V0XCI+XG4gICAgICAgIDxsZWdlbmQgY2xhc3M9XCJnb3Z1ay1maWVsZHNldF9fbGVnZW5kIGdvdnVrLWZpZWxkc2V0X19sZWdlbmQtLXhsXCI+XG4gICAgICAgICAgPGgxIGNsYXNzPVwiZ292dWstZmllbGRzZXRfX2hlYWRpbmdcIj5cbiAgICAgICAgICAgIHt7dG8ubGFiZWx9fVxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJ0by5yZXF1aXJlZCA9PT0gdHJ1ZVwiPiYjNDI7PC9zcGFuPlxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvbGVnZW5kPlxuICAgICAgICA8c3BhbiBpZD1cInRvLmlkXCIgY2xhc3M9XCJnb3Z1ay1oaW50XCI+XG4gICAgICAgICAge3t0by5kZXNjcmlwdGlvbn19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdvdnVrLXJhZGlvc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJnb3Z1ay1yYWRpb3NfX2l0ZW1cIiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHRvLm9wdGlvbnNcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImdvdnVrLXJhZGlvc19faW5wdXRcIiBcbiAgICAgICAgICAgICAgICAgICBpZD1cIm9wdGlvbi5pZFwiIFxuICAgICAgICAgICAgICAgICAgIG5hbWU9XCJvcHRpb24ubGFiZWxcIiBcbiAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIiBcbiAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgIFtmb3JtbHlBdHRyaWJ1dGVzXT1cImZpZWxkXCIgXG4gICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZ292dWstbGFiZWwgZ292dWstcmFkaW9zX19sYWJlbFwiIGZvcj1cIm9wdGlvbi5pZFwiPlxuICAgICAgICAgICAgICB7e29wdGlvbi5sYWJlbH19XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgPC9kaXY+YCxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWx5RmllbGRSYWRpbyBleHRlbmRzIEZpZWxkVHlwZSB7fVxuIl19