import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'formly-field-checkbox',
    template: `
      <div class="govuk-form-group">
        <fieldset class="govuk-fieldset">
          <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
            <h1 class="govuk-fieldset__heading">
              {{ to.label }}
            </h1>
          </legend>
          <span class="govuk-hint">
            {{ to.description }}
          </span>
          <div class="govuk-checkboxes">
            <div class="govuk-checkboxes__item" *ngFor="let option of to.options">
              <input class="govuk-checkboxes__input"
                     type="checkbox"
                     [value]="option.value"
                     [formControl]="formControl"
                     [formlyAttributes]="field">
              <label class="govuk-label govuk-checkboxes__label" [for]="id">
                {{ option.label }}
                <span *ngIf="to.required === true">*</span>
              </label>
            </div>
          </div>
        </fieldset>
      </div>`,
})
export class FormlyFieldCheckbox extends FieldType {}
