import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-textarea',
  template: `
    <div class="govuk-form-group">
      <label class="govuk-label" for="more-detail">
        {{to.label}}
      </label>
      <span id="more-detail-hint" class="govuk-hint">
        {{to.description}}
      </span>
      <textarea class="govuk-textarea"
                [cols]="to.cols"
                [rows]="to.rows"
                [formControl]="formControl"
                [formlyAttributes]="field">
      </textarea>
    </div>
  `,
})
export class FormlyFieldTextarea extends FieldType {}
