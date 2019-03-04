import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'formly-field-checkbox',
    template: `
      <div class="govuk-form-group">
            <div class="govuk-checkboxes__item">
              <input class="govuk-checkboxes__input"
                     [id]="key"
                     [name]="key"
                     [value]="to.value"
                     type="checkbox"
                     [formControl]="formControl"
                     [formlyAttributes]="field">
              <label class="govuk-label govuk-checkboxes__label" [for]="id">
                {{ to.label }}
                <span *ngIf="to.required === true">*</span>
              </label>
            </div>
      </div>`,
})
export class FormlyFieldCheckbox extends FieldType {}
