import { FieldType } from '@ngx-formly/core';
import { Component } from '@angular/core';

@Component({
  selector: 'formly-field-date',
  template: `
    <div class="govuk-form-group">
      <fieldset class="govuk-fieldset" role="group">
        <legend class="govuk-fieldset__legend govuk-fieldset__legend--xl">
          <h1 class="govuk-fieldset__heading">
            {{to.label}}
          </h1>
        </legend>
        <span [id]="to.description" class="govuk-hint">
          {{to.description}}
        </span>
        <div class="govuk-date-input" id="to.id">
          <div class="govuk-date-input__item">
            <div class="govuk-form-group">
              <label class="govuk-label govuk-date-input__label" for="gov-day">
                Day
              </label>
              <input class="govuk-input govuk-date-input__input govuk-input--width-2"
                     id="gov-day"
                     name="gov-day"
                     type="number"
                     pattern="[0-9]*"
                     [formControl]="formControl"
                     [formlyAttributes]="field">
            </div>
          </div>
          <div class="govuk-date-input__item">
            <div class="govuk-form-group">
              <label class="govuk-label govuk-date-input__label" for="gov-month">
                Month
              </label>
              <input class="govuk-input govuk-date-input__input govuk-input--width-2"
                     id="gov-month"
                     name="gov-month"
                     type="number"
                     pattern="[0-9]*"
                     [formControl]="formControl"
                     [formlyAttributes]="field">
            </div>
          </div>
          <div class="govuk-date-input__item">
            <div class="govuk-form-group">
              <label class="govuk-label govuk-date-input__label" for="gov-year">
                Year
              </label>
              <input class="govuk-input govuk-date-input__input govuk-input--width-4"
                     id="gov-year"
                     name="gov-year"
                     type="number"
                     pattern="[0-9]*"
                     [formControl]="formControl"
                     [formlyAttributes]="field">
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  `
})
export class FormlyFieldDate extends FieldType {

}
