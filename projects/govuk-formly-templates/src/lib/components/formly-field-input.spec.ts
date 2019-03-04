import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormlyFieldConfig, FormlyModule } from "@ngx-formly/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Component } from "@angular/core";
import { FormlyFieldInput } from "./formly-field-input";

describe('TextInput FormlyField test', () => {
  let fixture: ComponentFixture<TestComponent>;
  let inputFieldForm: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormlyFieldInput,
        TestComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormlyModule.forRoot({
          types: [
            { name: 'input', component: FormlyFieldInput }
          ]
        })
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    inputFieldForm = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  }));

  it('should create the input field', async(() => {
    expect(inputFieldForm.querySelector('formly-field-input')).toBeTruthy();
  }));
});

@Component({
  selector: 'test-checkbox',
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
      'key': 'exampleInputField',
      'type': 'input',
      'templateOptions': {
        'label': 'Enter Input details'
      }
    }
  ];

}
