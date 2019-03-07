import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-govuk-date-wrapper',
  template: `
    <div class="govuk-form-group">
      <fieldset class="govuk-fieldset" aria-describedby="passport-issued-hint" role="group">
        <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
          <h3 class="govuk-fieldset__heading">
            {{ to.label }}
          </h3>
        </legend>
        <span id="passport-issued-hint" class="govuk-hint">
    </span>
        <div class="govuk-date-input" id="passport-issued">
          <ng-container #fieldComponent></ng-container>
        </div>
      </fieldset>
    </div>
  `,
})
export class FormlyFieldGovukDateWrapper extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;
}
