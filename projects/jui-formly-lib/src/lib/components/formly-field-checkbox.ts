import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'formly-field-checkbox',
    template: `
    <div class="govuk-checkboxes__item" style="margin: 2ex 0">
        <input class="govuk-checkboxes__input" type="checkbox" [formControl]="formControl" [formlyAttributes]="field">
        <label class="govuk-label govuk-checkboxes__label" [for]="id">
          {{ to.label }}
          <span *ngIf="to.required === true">*</span>
        </label>
    </div>`,
})
export class FormlyFieldCheckbox extends FieldType {}
