import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-date',
  template: `
    <div class="govuk-form-group">
      <label class="govuk-label" for="for">
        {{to.label}}
        <span *ngIf="to.required === true">*</span>
      </label>
      <input class="govuk-input"
             id="to.id"
             name="to.name"
             type="date"
             [formControl]="formControl"
             [formlyAttributes]="field">
    </div>`,
})
export class FormlyFieldDate extends FieldType {}
