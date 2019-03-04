import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'formly-field-input',
    template: `
        <div class="govuk-form-group">
            <label class="govuk-label" for="for">
                {{to.label}}
                <span *ngIf="to.required === true">*</span>
            </label>
            <input class="govuk-input"
                   [id]="key"
                   [name]="key"
                   type="input"
                   [formControl]="formControl"
                   [formlyAttributes]="field">
        </div>`,
})
export class FormlyFieldInput extends FieldType {}
