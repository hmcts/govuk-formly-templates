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
        <div class="govuk-form-group" style="margin: 2ex 0">
            <label class="govuk-label" for="sort">
                {{to.label}}
                <span *ngIf="to.required === true">*</span>
            </label>
            <select class="govuk-select" id="sort" name="sort" [formControl]="formControl" [formlyAttributes]="field">
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWx5LWZpZWxkLXNlbGVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2p1aS1mb3JtbHktbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZm9ybWx5LWZpZWxkLXNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFxQjdDLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxTQUFTOzs7WUFuQi9DLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztLQWVUO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Zvcm1seS1maWVsZC1zZWxlY3QnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJnb3Z1ay1mb3JtLWdyb3VwXCIgc3R5bGU9XCJtYXJnaW46IDJleCAwXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJnb3Z1ay1sYWJlbFwiIGZvcj1cInNvcnRcIj5cbiAgICAgICAgICAgICAgICB7e3RvLmxhYmVsfX1cbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRvLnJlcXVpcmVkID09PSB0cnVlXCI+Kjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZ292dWstc2VsZWN0XCIgaWQ9XCJzb3J0XCIgbmFtZT1cInNvcnRcIiBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIiBbZm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nSWY9XCJ0by5wbGFjZWhvbGRlclwiIFtuZ1ZhbHVlXT1cIm51bGxcIj57eyB0by5wbGFjZWhvbGRlciB9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiB0by5vcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gW25nVmFsdWVdPVwib3B0aW9uLnZhbHVlXCIgW2Rpc2FibGVkXT1cIm9wdGlvbi5kaXNhYmxlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgb3B0aW9uLmxhYmVsIH19XG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seUZpZWxkU2VsZWN0IGV4dGVuZHMgRmllbGRUeXBlIHt9XG4iXX0=