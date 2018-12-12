import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-textarea',
  template: `
    <textarea class="govuk-textarea"
              [cols]="to.cols"
              [rows]="to.rows"
              [formControl]="formControl"
              [formlyAttributes]="field">
  </textarea>`,
})
export class FormlyFieldTextarea extends FieldType {}
