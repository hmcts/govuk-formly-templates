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
  model = {
    domain: {
      exampleInput: 'exmaple input text',
      exampleSelect: 'option-3'
    },
    exampleDate: {
      day: 12, month: 8, year: 2008
    },
    exampleCheckbox1: true,
    exampleRadio: 'option-4',
    exampleTextArea: 'example text area text'
  };

  fields: FormlyFieldConfig[] = [
    {
      'key': 'domain.exampleInput',
      'type': 'input',
      'templateOptions': {
        'label': 'Example text input',
      },
    },
    {
      'key': 'exampleDate',
      'type': 'date',
      'templateOptions': {
        'label': 'Example date input',
      }
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
      'templateOptions': {
        'label': 'Select the correct option',
        'options': [
          { value: 'option-1', label: 'Option 1'},
          { value: 'option-2', label: 'Option 2'},
          { value: 'option-3', label: 'Option 3'},
          { value: 'option-4', label: 'Option 4'}
        ]
      }
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
      'templateOptions': {
        'label': 'Select one of the options below',
        'options': [
          { value: 'option-1', label: 'Option 1'},
          { value: 'option-2', label: 'Option 2'},
          { value: 'option-3', label: 'Option 3'},
          { value: 'option-4', label: 'Option 4'}
        ]
      }
    },
    {
      'key': 'exampleTextArea',
      'type': 'textarea',
      'templateOptions': {
        'label': 'Example text area',
        'cols': 5,
        'rows': 5
      }
    }
  ];

  submit(model) {
    console.log(model);
  }
}
