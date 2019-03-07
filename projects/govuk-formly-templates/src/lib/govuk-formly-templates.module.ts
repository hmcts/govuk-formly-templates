import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { FormlyFieldInput } from './components/formly-field-input';
import { FormlyFieldSelect } from './components/formly-field-select';
import { FormlyFieldCheckbox } from './components/formly-field-checkbox';
import { FormlyFieldRadio } from './components/formly-field-radio';
import { FormlyFieldTextarea } from './components/formly-field-textarea';
import { FormlyFieldDate } from './components/formly-field-date';
import { govukDateType } from './components/govuk-date/formly-field-govuk-date';
import { FormlyFieldGovukDateItem } from './components/govuk-date/formly-field-govuk-date-item';
import { FormlyFieldGovukDateWrapper } from './components/govuk-date/formly-field-govuk-date-wrapper';

@NgModule({
  declarations: [
    FormlyFieldInput,
    FormlyFieldSelect,
    FormlyFieldCheckbox,
    FormlyFieldRadio,
    FormlyFieldTextarea,
    FormlyFieldDate,
    FormlyFieldGovukDateItem,
    FormlyFieldGovukDateWrapper
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        { name: 'input', component: FormlyFieldInput },
        { name: 'select', component: FormlyFieldSelect },
        { name: 'checkbox', component: FormlyFieldCheckbox },
        { name: 'radio', component: FormlyFieldRadio },
        { name: 'textarea', component: FormlyFieldTextarea },
        { name: 'date', component: FormlyFieldDate },
        { name: 'govukdateitem', component: FormlyFieldGovukDateItem },
        govukDateType,
      ],
      wrappers: [
        { name: 'formly-govuk-date-wrapper', component: FormlyFieldGovukDateWrapper },
      ],
    })
  ],
  exports: [
    FormlyFieldInput,
    FormlyFieldSelect,
    FormlyFieldCheckbox,
    FormlyFieldRadio,
    FormlyFieldTextarea,
    FormlyFieldDate,
    FormlyFieldGovukDateItem,
    FormlyFieldGovukDateWrapper
  ]
})
export class GovukFormlyTemplatesModule { }
