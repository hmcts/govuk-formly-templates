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
                    template: "\n    <div class=\"govuk-form-group\">\n      <div class=\"govuk-radios\" *ngFor=\"let option of to.options\">\n        <div class=\"govuk-radios__item\">\n          <input class=\"govuk-radios__input\"\n                 type=\"radio\"\n                 [value]=\"option.value\"\n                 [formControl]=\"formControl\"\n                 [formlyAttributes]=\"field\">\n          <label class=\"govuk-label govuk-radios__label\">\n            {{option.label}}\n          </label>\n        </div>\n      </div>\n    </div>"
                }] }
    ];
    return FormlyFieldRadio;
}(FieldType));
export { FormlyFieldRadio };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWx5LWZpZWxkLXJhZGlvLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanVpLWZvcm1seS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mb3JtbHktZmllbGQtcmFkaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU3QztJQWtCc0MsNENBQVM7SUFsQi9DOztJQWtCaUQsQ0FBQzs7Z0JBbEJqRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLGloQkFjRDtpQkFDVjs7SUFDZ0QsdUJBQUM7Q0FBQSxBQWxCbEQsQ0FrQnNDLFNBQVMsR0FBRztTQUFyQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtbHktZmllbGQtcmFkaW8nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJnb3Z1ay1mb3JtLWdyb3VwXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZ292dWstcmFkaW9zXCIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiB0by5vcHRpb25zXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJnb3Z1ay1yYWRpb3NfX2l0ZW1cIj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJnb3Z1ay1yYWRpb3NfX2lucHV0XCJcbiAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiXG4gICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiXG4gICAgICAgICAgICAgICAgIFtmb3JtbHlBdHRyaWJ1dGVzXT1cImZpZWxkXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZ292dWstbGFiZWwgZ292dWstcmFkaW9zX19sYWJlbFwiPlxuICAgICAgICAgICAge3tvcHRpb24ubGFiZWx9fVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YCxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWx5RmllbGRSYWRpbyBleHRlbmRzIEZpZWxkVHlwZSB7fVxuIl19