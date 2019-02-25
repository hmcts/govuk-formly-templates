import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-radio',
  template: `
    <div class="govuk-form-group">
      <fieldset class="govuk-fieldset">
        <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
          <h1 class="govuk-fieldset__heading">
            {{to.label}}
          </h1>
        </legend>
          <div class="govuk-radios">
            <div class="govuk-radios__item" *ngFor="let option of to.options">
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
      </fieldset>
    </div>`,
})
export class FormlyFieldRadio extends FieldType {}
