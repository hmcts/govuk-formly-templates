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
                    template: "\n        <div class=\"govuk-form-group\" style=\"margin: 2ex 0\">\n            <label class=\"govuk-label\" for=\"sort\">\n                {{to.label}}\n                <span *ngIf=\"to.required === true\">*</span>\n            </label>\n            <select class=\"govuk-select\" id=\"sort\" name=\"sort\" [formControl]=\"formControl\" [formlyAttributes]=\"field\">\n                <option *ngIf=\"to.placeholder\" [ngValue]=\"null\">{{ to.placeholder }}</option>\n                <ng-container *ngFor=\"let option of to.options\">\n                    <option [ngValue]=\"option.value\" [disabled]=\"option.disabled\">\n                        {{ option.label }}\n                    </option>\n                </ng-container>\n            </select>\n        </div>\n    "
                }] }
    ];
    return FormlyFieldSelect;
}(FieldType));
export { FormlyFieldSelect };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWx5LWZpZWxkLXNlbGVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2p1aS1mb3JtbHktbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZm9ybWx5LWZpZWxkLXNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTdDO0lBbUJ1Qyw2Q0FBUztJQW5CaEQ7O0lBbUJrRCxDQUFDOztnQkFuQmxELFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUseXdCQWVUO2lCQUNKOztJQUNpRCx3QkFBQztDQUFBLEFBbkJuRCxDQW1CdUMsU0FBUyxHQUFHO1NBQXRDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZm9ybWx5LWZpZWxkLXNlbGVjdCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImdvdnVrLWZvcm0tZ3JvdXBcIiBzdHlsZT1cIm1hcmdpbjogMmV4IDBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImdvdnVrLWxhYmVsXCIgZm9yPVwic29ydFwiPlxuICAgICAgICAgICAgICAgIHt7dG8ubGFiZWx9fVxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwidG8ucmVxdWlyZWQgPT09IHRydWVcIj4qPC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJnb3Z1ay1zZWxlY3RcIiBpZD1cInNvcnRcIiBuYW1lPVwic29ydFwiIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiIFtmb3JtbHlBdHRyaWJ1dGVzXT1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdJZj1cInRvLnBsYWNlaG9sZGVyXCIgW25nVmFsdWVdPVwibnVsbFwiPnt7IHRvLnBsYWNlaG9sZGVyIH19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHRvLm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBbbmdWYWx1ZV09XCJvcHRpb24udmFsdWVcIiBbZGlzYWJsZWRdPVwib3B0aW9uLmRpc2FibGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBvcHRpb24ubGFiZWwgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWx5RmllbGRTZWxlY3QgZXh0ZW5kcyBGaWVsZFR5cGUge31cbiJdfQ==