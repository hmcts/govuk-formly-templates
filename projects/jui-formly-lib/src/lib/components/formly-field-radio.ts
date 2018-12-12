import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-radio',
  template: `
    <div class="govuk-form-group">
      <div class="govuk-radios" *ngFor="let option of to.options">
        <div class="govuk-radios__item">
          <input class="govuk-radios__input"
                 type="radio"
                 [value]="option.value"
                 [formControl]="formControl"
                 [formlyAttributes]="field">
          <label class="govuk-label govuk-radios__label">
            {{option.label}}
          </label>
        </div>
      </div>
    </div>`,
})
export class FormlyFieldRadio extends FieldType {}
