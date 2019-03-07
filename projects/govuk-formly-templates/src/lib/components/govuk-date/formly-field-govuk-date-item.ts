import { FieldType } from '@ngx-formly/core';
import { Component } from '@angular/core';

@Component({
  selector: 'formly-field-govuk-date-item',
  template: `
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="gov-day">
          {{ to.label }}
        </label>
        <input [className]="'govuk-input govuk-date-input__input govuk-input--width-' + to.cols"
               [id]="key"
               [name]="key"
               type="number"
               [formControl]="formControl"
               [formlyAttributes]="field">
      </div>
    </div>
  `
})
export class FormlyFieldGovukDateItem extends FieldType {}
