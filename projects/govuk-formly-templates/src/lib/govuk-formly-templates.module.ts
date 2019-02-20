import { NgModule } from '@angular/core';
import { GovukFormlyTemplatesComponent } from './govuk-formly-templates.component';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { FormlyFieldInput } from './components/formly-field-input';
import { FormlyFieldSelect } from './components/formly-field-select';
import { FormlyFieldCheckbox } from './components/formly-field-checkbox';
import { FormlyFieldRadio } from './components/formly-field-radio';
import { FormlyFieldTextarea } from './components/formly-field-textarea';

@NgModule({
  declarations: [
    GovukFormlyTemplatesComponent,
    FormlyFieldInput,
    FormlyFieldSelect,
    FormlyFieldCheckbox,
    FormlyFieldRadio,
    FormlyFieldTextarea
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        { name: 'input', component: FormlyFieldInput },
        { name: 'select', component: FormlyFieldSelect },
        { name: 'checkbox', component: FormlyFieldCheckbox },
        { name: 'radio', component: FormlyFieldRadio },
        { name: 'textarea', component: FormlyFieldTextarea },
      ]
    })
  ],
  exports: [
    GovukFormlyTemplatesComponent,
    FormlyFieldInput,
    FormlyFieldSelect,
    FormlyFieldCheckbox,
    FormlyFieldRadio,
    FormlyFieldTextarea
  ]
})
export class GovukFormlyTemplatesModule { }
