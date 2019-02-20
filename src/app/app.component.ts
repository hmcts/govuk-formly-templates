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
      key: 'hi',
      type: 'input',
      templateOptions: {
        label: 'hi'
      }
    }
  ];

  submit(model) {
    console.log(model);
  }
}
