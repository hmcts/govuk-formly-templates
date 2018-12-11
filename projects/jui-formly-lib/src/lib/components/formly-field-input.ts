import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'formly-field-input',
    template: `
        <div class="govuk-form-group" style="margin: 2ex 0">
            <label class="govuk-label" for="sort">
                {{to.label}}
                <span *ngIf="to.required === true">*</span>
            </label>
            <input class="govuk-input" type="input" [formControl]="formControl" [formlyAttributes]="field">
        </div>`,
})
export class FormlyFieldInput extends FieldType {}
