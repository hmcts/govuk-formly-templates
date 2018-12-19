import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'formly-field-select',
    template: `
        <div class="govuk-form-group">
            <label class="govuk-label" for="for">
                {{to.label}}
                <span *ngIf="to.required === true">*</span>
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
    `,
})
export class FormlyFieldSelect extends FieldType {}
