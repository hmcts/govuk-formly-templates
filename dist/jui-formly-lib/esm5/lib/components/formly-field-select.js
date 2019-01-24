/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
var FormlyFieldSelect = /** @class */ (function (_super) {
    tslib_1.__extends(FormlyFieldSelect, _super);
    function FormlyFieldSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormlyFieldSelect.decorators = [
        { type: Component, args: [{
                    selector: 'formly-field-select',
                    template: "\n        <div class=\"govuk-form-group\">\n            <label class=\"govuk-label\" for=\"for\">\n                {{to.label}}\n                <span *ngIf=\"to.required === true\">&#42;</span>\n            </label>\n            <select class=\"govuk-select\" id=\"to.id\" name=\"to.name\" [formControl]=\"formControl\" [formlyAttributes]=\"field\">\n                <option *ngIf=\"to.placeholder\" [ngValue]=\"null\">{{ to.placeholder }}</option>\n                <ng-container *ngFor=\"let option of to.options\">\n                    <option [ngValue]=\"option.value\" [disabled]=\"option.disabled\">\n                        {{ option.label }}\n                    </option>\n                </ng-container>\n            </select>\n        </div>\n    "
                }] }
    ];
    return FormlyFieldSelect;
}(FieldType));
export { FormlyFieldSelect };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWx5LWZpZWxkLXNlbGVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2p1aS1mb3JtbHktbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZm9ybWx5LWZpZWxkLXNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTdDO0lBbUJ1Qyw2Q0FBUztJQW5CaEQ7O0lBbUJrRCxDQUFDOztnQkFuQmxELFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsd3ZCQWVUO2lCQUNKOztJQUNpRCx3QkFBQztDQUFBLEFBbkJuRCxDQW1CdUMsU0FBUyxHQUFHO1NBQXRDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZm9ybWx5LWZpZWxkLXNlbGVjdCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImdvdnVrLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImdvdnVrLWxhYmVsXCIgZm9yPVwiZm9yXCI+XG4gICAgICAgICAgICAgICAge3t0by5sYWJlbH19XG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJ0by5yZXF1aXJlZCA9PT0gdHJ1ZVwiPiYjNDI7PC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJnb3Z1ay1zZWxlY3RcIiBpZD1cInRvLmlkXCIgbmFtZT1cInRvLm5hbWVcIiBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIiBbZm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nSWY9XCJ0by5wbGFjZWhvbGRlclwiIFtuZ1ZhbHVlXT1cIm51bGxcIj57eyB0by5wbGFjZWhvbGRlciB9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiB0by5vcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gW25nVmFsdWVdPVwib3B0aW9uLnZhbHVlXCIgW2Rpc2FibGVkXT1cIm9wdGlvbi5kaXNhYmxlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgb3B0aW9uLmxhYmVsIH19XG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seUZpZWxkU2VsZWN0IGV4dGVuZHMgRmllbGRUeXBlIHt9XG4iXX0=