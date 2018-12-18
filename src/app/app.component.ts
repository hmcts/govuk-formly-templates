import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="form" (ngSubmit)="submit(model)">
      <formly-form [form]="form" [fields]="fields" [model]="model">
        <button type="submit" class="govuk-button">Submit</button>
      </formly-form>
    </form>
  `,
})
export class AppComponent {
  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'key',
      type: 'select',
      templateOptions: {
        label: 'Placeholder',
        options: [
          { value: 'input', label: 'text' },
          { value: 'select', label: 'drop-down' },
          { value: 'radio', label: 'radio buttons' },
          { value: 'checkbox', label: 'checkbox' }
        ],
        required: true
      }
    },
    {
      key: 'label',
      type: 'input',
      templateOptions: {
        label: 'Label',
        required: true
      }
    },
    {
      key: 'type',
      type: 'select',
      templateOptions: {
        label: 'Type',
        options: [
          { value: 'input', label: 'text' },
          { value: 'select', label: 'drop-down' },
          { value: 'radio', label: 'radio buttons' },
          { value: 'checkbox', label: 'checkbox' }
        ],
        required: true
      }
    },
    {
      key: 'source',
      type: 'input',
      templateOptions: {
        label: 'Source'
      }
    },
    {
      key: 'hideExpression',
      type: 'input',
      templateOptions: {
        label: 'Hide expression'
      }
    },
    {
      key: 'required',
      type: 'checkbox',
      templateOptions: {
        options: [
          {label: 'Is mandatory?'}
        ]
      }
    }
  ];

  submit(model) {
    console.log(model);
  }
}
