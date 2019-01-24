/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
var FormlyFieldRadio = /** @class */ (function (_super) {
    tslib_1.__extends(FormlyFieldRadio, _super);
    function FormlyFieldRadio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormlyFieldRadio.decorators = [
        { type: Component, args: [{
                    selector: 'formly-field-radio',
                    template: "\n    <div class=\"govuk-form-group\">\n      <fieldset class=\"govuk-fieldset\">\n        <legend class=\"govuk-fieldset__legend govuk-fieldset__legend--xl\">\n          <h1 class=\"govuk-fieldset__heading\">\n            {{to.label}}\n          </h1>\n        </legend>\n        <span id=\"to.id\" class=\"govuk-hint\">\n          {{to.description}}\n        </span>\n        <div class=\"govuk-radios\">\n          <div class=\"govuk-radios__item\" *ngFor=\"let option of to.options\">\n            <input class=\"govuk-radios__input\" \n                   id=\"option.id\" \n                   name=\"option.label\" \n                   type=\"radio\" \n                   [formControl]=\"formControl\"\n                   [formlyAttributes]=\"field\" \n                   [value]=\"option.value\">\n            <label class=\"govuk-label govuk-radios__label\" for=\"option.id\">\n              {{option.label}}\n            </label>\n          </div>\n        </div>\n      </fieldset>\n    </div>"
                }] }
    ];
    return FormlyFieldRadio;
}(FieldType));
export { FormlyFieldRadio };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWx5LWZpZWxkLXJhZGlvLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanVpLWZvcm1seS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mb3JtbHktZmllbGQtcmFkaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU3QztJQThCc0MsNENBQVM7SUE5Qi9DOztJQThCaUQsQ0FBQzs7Z0JBOUJqRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLDQrQkEwQkQ7aUJBQ1Y7O0lBQ2dELHVCQUFDO0NBQUEsQUE5QmxELENBOEJzQyxTQUFTLEdBQUc7U0FBckMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybWx5LWZpZWxkLXJhZGlvJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZ292dWstZm9ybS1ncm91cFwiPlxuICAgICAgPGZpZWxkc2V0IGNsYXNzPVwiZ292dWstZmllbGRzZXRcIj5cbiAgICAgICAgPGxlZ2VuZCBjbGFzcz1cImdvdnVrLWZpZWxkc2V0X19sZWdlbmQgZ292dWstZmllbGRzZXRfX2xlZ2VuZC0teGxcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJnb3Z1ay1maWVsZHNldF9faGVhZGluZ1wiPlxuICAgICAgICAgICAge3t0by5sYWJlbH19XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9sZWdlbmQ+XG4gICAgICAgIDxzcGFuIGlkPVwidG8uaWRcIiBjbGFzcz1cImdvdnVrLWhpbnRcIj5cbiAgICAgICAgICB7e3RvLmRlc2NyaXB0aW9ufX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ292dWstcmFkaW9zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImdvdnVrLXJhZGlvc19faXRlbVwiICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgdG8ub3B0aW9uc1wiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZ292dWstcmFkaW9zX19pbnB1dFwiIFxuICAgICAgICAgICAgICAgICAgIGlkPVwib3B0aW9uLmlkXCIgXG4gICAgICAgICAgICAgICAgICAgbmFtZT1cIm9wdGlvbi5sYWJlbFwiIFxuICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgW2Zvcm1seUF0dHJpYnV0ZXNdPVwiZmllbGRcIiBcbiAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJnb3Z1ay1sYWJlbCBnb3Z1ay1yYWRpb3NfX2xhYmVsXCIgZm9yPVwib3B0aW9uLmlkXCI+XG4gICAgICAgICAgICAgIHt7b3B0aW9uLmxhYmVsfX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWVsZHNldD5cbiAgICA8L2Rpdj5gLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlGaWVsZFJhZGlvIGV4dGVuZHMgRmllbGRUeXBlIHt9XG4iXX0=