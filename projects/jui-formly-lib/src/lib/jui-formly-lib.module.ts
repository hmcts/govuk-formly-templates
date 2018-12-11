import { NgModule } from '@angular/core';
import { JuiFormlyLibComponent } from './jui-formly-lib.component';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { FormlyFieldInput } from './components/formly-field-input';
import { FormlyFieldSelect } from './components/formly-field-select';
import { FormlyFieldCheckbox } from './components/formly-field-checkbox';

@NgModule({
  declarations: [
    JuiFormlyLibComponent,
    FormlyFieldInput,
    FormlyFieldSelect,
    FormlyFieldCheckbox
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        { name: 'input', component: FormlyFieldInput },
        { name: 'select', component: FormlyFieldSelect },
        { name: 'checkbox', component: FormlyFieldCheckbox },
      ]
    })
  ],
  exports: [
    JuiFormlyLibComponent,
    FormlyFieldInput,
    FormlyFieldSelect,
    FormlyFieldCheckbox
  ]
})
export class JuiFormlyLibModule { }
