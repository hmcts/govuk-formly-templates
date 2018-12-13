/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
var FormlyFieldCheckbox = /** @class */ (function (_super) {
    tslib_1.__extends(FormlyFieldCheckbox, _super);
    function FormlyFieldCheckbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormlyFieldCheckbox.decorators = [
        { type: Component, args: [{
                    selector: 'formly-field-checkbox',
                    template: "\n      <div class=\"govuk-form-group\">\n        <fieldset class=\"govuk-fieldset\">\n          <legend class=\"govuk-fieldset__legend govuk-fieldset__legend--xl\">\n            <h1 class=\"govuk-fieldset__heading\">\n              {{to.label}}\n            </h1>\n          </legend>\n          <span id=\"to.id\" class=\"govuk-hint\">\n            {{to.description}}\n          </span>\n          <div class=\"govuk-checkboxes\">\n            <div class=\"govuk-checkboxes__item\" *ngFor=\"let option of to.options\">\n              <input class=\"govuk-checkboxes__input\" type=\"checkbox\" [formControl]=\"formControl\" [formlyAttributes]=\"field\">\n              <label class=\"govuk-label govuk-checkboxes__label\" [for]=\"id\">\n                {{ option.label }}\n                <span *ngIf=\"to.required === true\">*</span>\n              </label>\n            </div>\n          </div>\n        </fieldset>\n      </div>"
                }] }
    ];
    return FormlyFieldCheckbox;
}(FieldType));
export { FormlyFieldCheckbox };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWx5LWZpZWxkLWNoZWNrYm94LmpzIiwic291cmNlUm9vdCI6Im5nOi8vanVpLWZvcm1seS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mb3JtbHktZmllbGQtY2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU3QztJQXlCeUMsK0NBQVM7SUF6QmxEOztJQXlCb0QsQ0FBQzs7Z0JBekJwRCxTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsUUFBUSxFQUFFLHM2QkFxQkQ7aUJBQ1o7O0lBQ21ELDBCQUFDO0NBQUEsQUF6QnJELENBeUJ5QyxTQUFTLEdBQUc7U0FBeEMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmb3JtbHktZmllbGQtY2hlY2tib3gnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZ292dWstZm9ybS1ncm91cFwiPlxuICAgICAgICA8ZmllbGRzZXQgY2xhc3M9XCJnb3Z1ay1maWVsZHNldFwiPlxuICAgICAgICAgIDxsZWdlbmQgY2xhc3M9XCJnb3Z1ay1maWVsZHNldF9fbGVnZW5kIGdvdnVrLWZpZWxkc2V0X19sZWdlbmQtLXhsXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3M9XCJnb3Z1ay1maWVsZHNldF9faGVhZGluZ1wiPlxuICAgICAgICAgICAgICB7e3RvLmxhYmVsfX1cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPC9sZWdlbmQ+XG4gICAgICAgICAgPHNwYW4gaWQ9XCJ0by5pZFwiIGNsYXNzPVwiZ292dWstaGludFwiPlxuICAgICAgICAgICAge3t0by5kZXNjcmlwdGlvbn19XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJnb3Z1ay1jaGVja2JveGVzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ292dWstY2hlY2tib3hlc19faXRlbVwiICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgdG8ub3B0aW9uc1wiPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJnb3Z1ay1jaGVja2JveGVzX19pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiIFtmb3JtbHlBdHRyaWJ1dGVzXT1cImZpZWxkXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImdvdnVrLWxhYmVsIGdvdnVrLWNoZWNrYm94ZXNfX2xhYmVsXCIgW2Zvcl09XCJpZFwiPlxuICAgICAgICAgICAgICAgIHt7IG9wdGlvbi5sYWJlbCB9fVxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwidG8ucmVxdWlyZWQgPT09IHRydWVcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICA8L2Rpdj5gLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlGaWVsZENoZWNrYm94IGV4dGVuZHMgRmllbGRUeXBlIHt9XG4iXX0=