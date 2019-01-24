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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWx5LWZpZWxkLWNoZWNrYm94LmpzIiwic291cmNlUm9vdCI6Im5nOi8vanVpLWZvcm1seS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mb3JtbHktZmllbGQtY2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBaUM3QyxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsU0FBUzs7O1lBL0JqRCxTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7YUEyQkQ7YUFDWiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZm9ybWx5LWZpZWxkLWNoZWNrYm94JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBjbGFzcz1cImdvdnVrLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGZpZWxkc2V0IGNsYXNzPVwiZ292dWstZmllbGRzZXRcIj5cbiAgICAgICAgICA8bGVnZW5kIGNsYXNzPVwiZ292dWstZmllbGRzZXRfX2xlZ2VuZCBnb3Z1ay1maWVsZHNldF9fbGVnZW5kLS14bFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzPVwiZ292dWstZmllbGRzZXRfX2hlYWRpbmdcIj5cbiAgICAgICAgICAgICAge3t0by5sYWJlbH19XG4gICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwidG8ucmVxdWlyZWQgPT09IHRydWVcIj4mIzQyOzwvc3Bhbj5cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPC9sZWdlbmQ+XG4gICAgICAgICAgPHNwYW4gaWQ9XCJ0by5pZFwiIGNsYXNzPVwiZ292dWstaGludFwiPlxuICAgICAgICAgICAge3t0by5kZXNjcmlwdGlvbn19XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJnb3Z1ay1jaGVja2JveGVzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ292dWstY2hlY2tib3hlc19faXRlbVwiICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgdG8ub3B0aW9uc1wiPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJnb3Z1ay1jaGVja2JveGVzX19pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICBpZD1cIm9wdGlvbi5pZFwiXG4gICAgICAgICAgICAgICAgICAgICBuYW1lPVwib3B0aW9uLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgW2Zvcm1seUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxuICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJnb3Z1ay1sYWJlbCBnb3Z1ay1jaGVja2JveGVzX19sYWJlbFwiIFtmb3JdPVwib3B0aW9uLmlkXCI+XG4gICAgICAgICAgICAgICAge3sgb3B0aW9uLmxhYmVsIH19XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9maWVsZHNldD5cbiAgICAgIDwvZGl2PmAsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seUZpZWxkQ2hlY2tib3ggZXh0ZW5kcyBGaWVsZFR5cGUge31cbiJdfQ==