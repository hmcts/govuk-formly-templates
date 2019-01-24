import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-radio',
  template: `
    <div class="govuk-form-group">
      <fieldset class="govuk-fieldset">
        <legend class="govuk-fieldset__legend govuk-fieldset__legend--xl">
          <h1 class="govuk-fieldset__heading">
            {{to.label}}
          </h1>
        </legend>
        <span id="to.id" class="govuk-hint">
          {{to.description}}
        </span>
        <div class="govuk-radios">
          <div class="govuk-radios__item" *ngFor="let option of to.options">
            <input class="govuk-radios__input" 
                   id="option.id" 
                   name="option.label" 
                   type="radio" 
                   [formControl]="formControl"
                   [formlyAttributes]="field" 
                   [value]="option.value">
            <label class="govuk-label govuk-radios__label" for="option.id">
              {{option.label}}
            </label>
          </div>
        </div>
      </fieldset>
    </div>`,
})
export class FormlyFieldRadio extends FieldType {}
