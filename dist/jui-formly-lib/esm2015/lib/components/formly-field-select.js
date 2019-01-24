/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
export class FormlyFieldSelect extends FieldType {
}
FormlyFieldSelect.decorators = [
    { type: Component, args: [{
                selector: 'formly-field-select',
                template: `
        <div class="govuk-form-group">
            <label class="govuk-label" for="for">
                {{to.label}}
                <span *ngIf="to.required === true">&#42;</span>
            </label>
            <select class="govuk-select" id="to.id" name="to.name" [formControl]="formControl" [formlyAttributes]="field">
                <option *ngIf="to.placeholder" [ngValue]="null">{{ to.placeholder }}</option>
                <ng-container *ngFor="let option of to.options">
                    <option [ngValue]="option.value" [disabled]="option.disabled">
                        {{ option.label }}
                    </option>
                </ng-container>
            </select>
        </div>
    `
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWx5LWZpZWxkLXNlbGVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2p1aS1mb3JtbHktbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZm9ybWx5LWZpZWxkLXNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFxQjdDLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxTQUFTOzs7WUFuQi9DLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztLQWVUO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Zvcm1seS1maWVsZC1zZWxlY3QnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJnb3Z1ay1mb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJnb3Z1ay1sYWJlbFwiIGZvcj1cImZvclwiPlxuICAgICAgICAgICAgICAgIHt7dG8ubGFiZWx9fVxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwidG8ucmVxdWlyZWQgPT09IHRydWVcIj4mIzQyOzwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZ292dWstc2VsZWN0XCIgaWQ9XCJ0by5pZFwiIG5hbWU9XCJ0by5uYW1lXCIgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCIgW2Zvcm1seUF0dHJpYnV0ZXNdPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0lmPVwidG8ucGxhY2Vob2xkZXJcIiBbbmdWYWx1ZV09XCJudWxsXCI+e3sgdG8ucGxhY2Vob2xkZXIgfX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgdG8ub3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIFtuZ1ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiIFtkaXNhYmxlZF09XCJvcHRpb24uZGlzYWJsZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IG9wdGlvbi5sYWJlbCB9fVxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlGaWVsZFNlbGVjdCBleHRlbmRzIEZpZWxkVHlwZSB7fVxuIl19