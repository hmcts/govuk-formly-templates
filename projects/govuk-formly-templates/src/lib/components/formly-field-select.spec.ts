import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormlyFieldConfig, FormlyModule } from "@ngx-formly/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Component } from "@angular/core";
import { FormlyFieldSelect } from "./formly-field-select";

describe('Select FormlyField test', () => {
  let fixture: ComponentFixture<TestComponent>;
  let selectFieldForm: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormlyFieldSelect,
        TestComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormlyModule.forRoot({
          types: [
            { name: 'select', component: FormlyFieldSelect }
          ]
        })
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    selectFieldForm = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  }));

  it('should create the select field', async(() => {
    expect(selectFieldForm.querySelector('formly-field-select')).toBeTruthy();
  }));
});

@Component({
  selector: 'test-select',
  template: `
    <form [formGroup]="form">
      <formly-form [form]="form" [fields]="fields" [model]="model">
      </formly-form>
    </form>
  `
})
export class TestComponent {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      'key': 'exampleSelect',
      'type': 'select',
      'templateOptions': {
        'label': 'Select relevant options',
        'options': [{ name: 'example-select-1', value: 'option-1', label: 'Option 1'}]
      }
    }
  ];

}
