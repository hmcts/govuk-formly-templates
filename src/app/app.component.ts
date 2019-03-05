import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  title = 'govuk-formly-templates';
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      'key': 'exampleInput',
      'type': 'input',
      'hideExpression': null,
      'templateOptions': {
        'label': 'Example text input',
        'options': []
      },
      'fieldArray': null
    },
    {
      'key': 'exampleDate',
      'type': 'date',
      'hideExpression': null,
      'templateOptions': {
        'label': 'Example datepicker input',
        'options': []
      },
      'fieldArray': null
    },
    {
      'key': 'exampleSelect',
      'type': 'select',
      'hideExpression': null,
      'templateOptions': {
        'label': 'Select the correct option',
        'options': [
          { value: 'option-1', label: 'Option 1'},
          { value: 'option-2', label: 'Option 2'},
          { value: 'option-3', label: 'Option 3'},
          { value: 'option-4', label: 'Option 4'}
        ]
      },
      'fieldArray': null
    },
    {
      'key': 'exampleCheckbox1',
      'type': 'checkbox',
      'templateOptions': {
        'label': 'Example checkbox option 1'
      }
    },
    {
      'key': 'exampleCheckbox2',
      'type': 'checkbox',
      'templateOptions': {
        'label': 'Example checkbox option 2'
      }
    },
    {
      'key': 'exampleRadio',
      'type': 'radio',
      'hideExpression': null,
      'templateOptions': {
        'label': 'Select one of the options below',
        'options': [
          { value: 'option-1', label: 'Option 1'},
          { value: 'option-2', label: 'Option 2'},
          { value: 'option-3', label: 'Option 3'},
          { value: 'option-4', label: 'Option 4'}
        ]
      },
      'fieldArray': null
    },
    {
      'key': 'exampleTextArea',
      'type': 'textarea',
      'hideExpression': null,
      'templateOptions': {
        'label': 'Example text area',
        'cols': 5,
        'rows': 5
      },
      'fieldArray': null
    }
  ];

  submit(model) {
    console.log(model);
  }
}
